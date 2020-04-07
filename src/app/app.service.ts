import { Injectable } from "@angular/core";
import { SingularModel } from "./singular/singular.model";
import { Observable, of } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { delay } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class AppService {
  cartItems = [];
  products = [
    new SingularModel(
      "11",
      "Samsung Tv 70 tommer",
      `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod iusto nulla
      illo atque, optio maiores consequuntur distinctio ut qui, impedit
      exercitationem laborum praesentium hic aspernatur et rem ab, officiis
      similique?`,
      "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",
      4200,
      "tv"
    ),
    new SingularModel(
      "12",
      "Samsung Tv 55 tommer",
      `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod iusto nulla
      illo atque, optio maiores consequuntur distinctio ut qui, impedit
      exercitationem laborum praesentium hic aspernatur et rem ab, officiis
      similique?`,
      "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",
      8200,
      "tv"
    ),
    new SingularModel(
      "15",
      "Samsung Tv 24 tommer",
      `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod iusto nulla
      illo atque, optio maiores consequuntur distinctio ut qui, impedit
      exercitationem laborum praesentium hic aspernatur et rem ab, officiis
      similique?`,
      "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",
      7800,
      "tv"
    ),
    new SingularModel(
      "155",
      "Samsung Tv 100 tommer",
      `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod iusto nulla
      illo atque, optio maiores consequuntur distinctio ut qui, impedit
      exercitationem laborum praesentium hic aspernatur et rem ab, officiis
      similique?`,
      "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",
      15000,
      "tv"
    ),
    new SingularModel(
      "121",
      "GTX 1080",
      `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod iusto nulla
      illo atque, optio maiores consequuntur distinctio ut qui, impedit
      exercitationem laborum praesentium hic aspernatur et rem ab, officiis
      similique?`,
      "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",
      6000,
      "pc"
    ),
  ];

  arrayOfCartItems$: Observable<SingularModel[]> = of(this.cartItems);

  arrayOfProducts$: Observable<SingularModel[]> = of(this.products).pipe(
    delay(1000)
  );

  getProducts() {
    return this.arrayOfProducts$;
  }

  getCartProducts() {
    return this.arrayOfCartItems$;
  }
  addProductToCartArray(id) {
    let productToBeAdded = this.products.filter((x) => {
      return x.id == id;
    });
    this.cartItems.push(productToBeAdded);
  }
  constructor() {}
}
