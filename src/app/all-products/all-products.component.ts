import { Component, OnInit } from "@angular/core";
import { SingularModel } from "../singular/singular.model";
import { AppService } from "../app.service";

@Component({
  selector: "app-all-products",
  templateUrl: "./all-products.component.html",
  styleUrls: ["./all-products.component.scss"]
})
export class AllProductsComponent implements OnInit {
  allProducts: Array<SingularModel>;
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.allProducts = this.appService.getProducts();
  }
}
