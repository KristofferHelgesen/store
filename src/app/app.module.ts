import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SingularComponent } from "./singular/singular.component";
import { NewProductComponent } from "./new-product/new-product.component";
import { FormsModule } from "@angular/forms";
import { AllProductsComponent } from './all-products/all-products.component';
import { NavComponent } from './nav/nav.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [AppComponent, SingularComponent, NewProductComponent, AllProductsComponent, NavComponent, CartComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
