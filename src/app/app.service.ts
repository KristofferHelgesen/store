import { Injectable } from "@angular/core";
import { SingularModel } from "./singular/singular.model";

@Injectable({
  providedIn: "root"
})
export class AppService {
  arrayOfProducts: Array<SingularModel> = [
    new SingularModel(
      "11",
      "Samsung Tv 70tommer",
      `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod iusto nulla
      illo atque, optio maiores consequuntur distinctio ut qui, impedit
      exercitationem laborum praesentium hic aspernatur et rem ab, officiis
      similique?`,
      "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",
      4200
    ),
    new SingularModel(
      "12",
      "Samsung Tv 55 tommer",
      `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod iusto nulla
      illo atque, optio maiores consequuntur distinctio ut qui, impedit
      exercitationem laborum praesentium hic aspernatur et rem ab, officiis
      similique?`,
      "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",
      8200
    ),
    new SingularModel(
      "15",
      "Samsung Tv 24 tommer",
      `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod iusto nulla
      illo atque, optio maiores consequuntur distinctio ut qui, impedit
      exercitationem laborum praesentium hic aspernatur et rem ab, officiis
      similique?`,
      "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",
      7800
    ),
    new SingularModel(
      "155",
      "Samsung Tv 100 tommer",
      `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod iusto nulla
      illo atque, optio maiores consequuntur distinctio ut qui, impedit
      exercitationem laborum praesentium hic aspernatur et rem ab, officiis
      similique?`,
      "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",
      15000
    )
  ];

  getProducts() {
    return this.arrayOfProducts;
  }

  addProduct(singularProduct: SingularModel) {
    this.arrayOfProducts.push(singularProduct);
  }

  constructor() {}
}
