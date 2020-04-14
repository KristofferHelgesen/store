import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { SingularModel } from "../singular/singular.model";
import { AppService } from "../app.service";
import {
  Observable,
  of,
  combineLatest,
  fromEvent,
  BehaviorSubject,
} from "rxjs";
import { distinct, map, mergeMap, filter, startWith } from "rxjs/operators";

import { FormControl } from "@angular/forms";

@Component({
  selector: "app-all-products",
  templateUrl: "./all-products.component.html",
  styleUrls: ["./all-products.component.scss"],
})
export class AllProductsComponent implements OnInit{

  allProducts$: Observable<SingularModel[]> 

  //Filters
  initValue = "random";
  uniqueTypes = ["tv", "pc","random"];

  selectedTypeSubject = new BehaviorSubject<string>(this.initValue);
  selectedType$ = this.selectedTypeSubject.asObservable();
  uniqueTypeFunction(e) {
    this.selectedTypeSubject.next(e.target.value);
  }

  selectedRangeSliderSubject = new BehaviorSubject<number>(5000);
  selectedRangeSlider$ = this.selectedRangeSliderSubject.asObservable();
  priceRangeSliderFunction(e) {
    this.selectedRangeSliderSubject.next(e.target.value);
  }

  filteredProducts$ = combineLatest(
    this.selectedType$,
    this.selectedRangeSlider$,
    this.appService.getProducts()
  ).pipe(
    map(([selectedType, priceRangeSlider, allProducts]) =>
      allProducts.filter((product) => {

        console.log("SOMETHING CHANGED IN")
        let priceRangeBool = product.price >= priceRangeSlider;
        let productTypeBool = product.type == selectedType;
        return productTypeBool && priceRangeBool ? product : null;
      })
    )
  );

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.allProducts$ = this.appService.getCartProducts();
  }
  
}
