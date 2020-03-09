import { Injectable } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AppService } from "../app.service";
import { SingularModel } from "../singular/singular.model";

@Injectable({
  providedIn: "root"
})
export class NewProductService {
  constructor(private appService: AppService) {}
  product: SingularModel;
  save(value) {
    if (value) {
      if (
        value.title &&
        value.desc &&
        value.price &&
        value.img &&
        value.price
      ) {
        this.product = new SingularModel(
          "ID" + Math.random(),
          value.title,
          value.desc,
          value.img,
          value.price
        );
        this.appService.addProduct(this.product);
      }
    } else {
      return false;
    }
  }
}
