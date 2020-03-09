import { Injectable } from "@angular/core";
import { SingularModel } from "./singular.model";
import { DeprecatedI18NPipesModule } from "@angular/common";
import { AppService } from "../app.service";

@Injectable({
  providedIn: "root"
})
export class SingularService {
  arrayOfProducts: Array<SingularModel>;

  getSingularProduct(incomingId) {
    if (this.arrayOfProducts) {
      return this.arrayOfProducts.find(x => {
        return x.id == incomingId;
      });
    }
  }
  constructor(private appService: AppService) {
    this.arrayOfProducts = this.appService.getProducts();
  }
}
