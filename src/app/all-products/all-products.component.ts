import { Component, OnInit } from "@angular/core";
import { SingularModel } from "../singular/singular.model";
import { AppService } from "../app.service";
import { Observable, of, combineLatest } from "rxjs";
import { distinct, map, mergeMap, filter } from "rxjs/operators";

@Component({
  selector: "app-all-products",
  templateUrl: "./all-products.component.html",
  styleUrls: ["./all-products.component.scss"],
})
export class AllProductsComponent implements OnInit {
  allProducts$: Observable<SingularModel[]>;
  uniqueTypes$: Observable<string[]> =  of(["tv", "pc"]);
  selectedType$: Observable<string> = of("");
  priceRangeSlider$: Observable<number> = of(5000);

  priceRangeSliderFunction(e) {
    this.priceRangeSlider$ = e.target.value;
    console.log(this.priceRangeSlider$);
  }
  uniqueTypesFunction(e) {
    this.selectedType$ = e.target.value;
    console.log(this.selectedType$);
  }

  //https://stackblitz.com/edit/angular-filtering-rxjs?file=src%2Fapp%2Fapp.component.ts

  constructor(private appService: AppService) {}

  ngOnInit() {
   /*
    this.allProducts$ = combineLatest(this.selectedType$, this.priceRangeSlider$,this.appService.getProducts()).pipe(

      map(([selectedType, priceRangeSlider,getProducts]) => 
      getProducts.filter(product => product.type == this.selectedType$))


https://stackblitz.com/edit/angular-filtering-rxjs?file=src%2Fapp%2Fapp.component.ts
    );*/
  }
    /*  this.appService
      .getProducts()
      .pipe(
        map((array) =>
          array.filter((x) =>
            this.selectedType != "" ? x.type == this.selectedType : x
          )
        )
      )
      .subscribe((x) => (this.allProducts = x));*/
  }
}
