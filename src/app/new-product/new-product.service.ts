import { Injectable } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AppService } from "../app.service";
import { SingularModel } from "../singular/singular.model";

@Injectable({
  providedIn: "root",
})
export class NewProductService {
  constructor(private appService: AppService) {}

  save(product: SingularModel) {
    this.appService.addProduct(product);
  }
}
