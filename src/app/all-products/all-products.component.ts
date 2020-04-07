import { Component, OnInit } from "@angular/core";
import { SingularModel } from "../singular/singular.model";
import { AppService } from "../app.service";
import { Observable, of } from "rxjs";

@Component({
  selector: "app-all-products",
  templateUrl: "./all-products.component.html",
  styleUrls: ["./all-products.component.scss"],
})
export class AllProductsComponent implements OnInit {
  allProducts$: Observable<SingularModel[]> = of(null);
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.allProducts$ = this.appService.getProducts();
  }
}
