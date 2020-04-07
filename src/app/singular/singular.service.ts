import { Injectable } from "@angular/core";
import { SingularModel } from "./singular.model";
import { DeprecatedI18NPipesModule } from "@angular/common";
import { AppService } from "../app.service";
import { of, Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class SingularService {
  arrayOfProducts$: Observable<SingularModel[]>;

  addProduct(id) {
    this.appService.addProductToCartArray(id);
  }

  getSingularProduct(incomingId) {
    /* if (this.arrayOfProducts$) {
      this.arrayOfProducts$.pipe(
        map((x) => {
          console.log("IM X: ", x);
          return x.id === incomingId;
        })
      );
    } else {
      return of(false);
    }*/
  }

  constructor(private appService: AppService) {}
}
