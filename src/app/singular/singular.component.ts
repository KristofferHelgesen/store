import { Component, OnInit, Input } from "@angular/core";
import { SingularService } from "./singular.service";
import { SingularModel } from "./singular.model";

@Component({
  selector: "app-singular",
  templateUrl: "./singular.component.html",
  styleUrls: ["./singular.component.scss"]
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

  ngOnInit() {
    if (!this.singularProduct) {
      //Logiq for grabbing id is not done
      this.singularProduct = this.singularService.getSingularProduct(this.id);
    }
  }

  singularProduct: SingularModel = this.completeObject()
    ? new SingularModel(
        this.id,
        this.title,
        this.description,
        this.imgUrl,
        this.price
      )
    : null;

  completeObject() {
    if (
      this.id &&
      this.title &&
      this.description &&
      this.imgUrl &&
      this.price
    ) {
      return true;
    } else {
      return false;
    }
  }

  addProduct() {}
}
