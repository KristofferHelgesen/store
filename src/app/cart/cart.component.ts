import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
import { SingularModel } from "../singular/singular.model";
import { Observable } from "rxjs";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  constructor(private appService: AppService) {}

  arrayOfCartItems$: Observable<SingularModel[]>;

  ngOnInit() {
    this.arrayOfCartItems$ = this.appService.getCartProducts();
  }
}
