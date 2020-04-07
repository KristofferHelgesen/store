import { Component, OnInit, Input } from "@angular/core";
import { SingularService } from "./singular.service";
import { SingularModel } from "./singular.model";

@Component({
  selector: "app-singular",
  templateUrl: "./singular.component.html",
  styleUrls: ["./singular.component.scss"],
})
export class SingularComponent implements OnInit {
  //https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656238#overview

  //PRODUCT ID FROM URL
  @Input() id: String;
  @Input() title: String;
  @Input() description: String;
  @Input() imgUrl: String;
  @Input() price: Number;

  //Find product in array
  constructor(private singularService: SingularService) {}

  ngOnInit() {}

  completeObject() {}

  addProduct(id) {
    //logic to send to cart du update array with products
    this.singularService.addProduct(id);
  }
}
