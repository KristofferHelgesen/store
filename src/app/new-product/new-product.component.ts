import { Component, OnInit } from "@angular/core";
import { SingularService } from "../singular/singular.service";
import { SingularModel } from "../singular/singular.model";
import { NgForm } from "@angular/forms";
import { NewProductService } from "./new-product.service";
import { AppService } from "../app.service";
@Component({
  selector: "app-new-product",
  templateUrl: "./new-product.component.html",
  styleUrls: ["./new-product.component.scss"]
})
export class NewProductComponent implements OnInit {
  allProducts: Array<SingularModel>;
  constructor(
    private appService: AppService,
    private newProductService: NewProductService
  ) {}

  ngOnInit() {
    this.allProducts = this.appService.getProducts();
  }

  //On submit of form
  onSubmit(form: NgForm) {
    this.newProductService.save(form.value);
    form.resetForm();
  }
}
