import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SingularComponent } from "./singular/singular.component";
import { NewProductComponent } from "./new-product/new-product.component";
import { AllProductsComponent } from "./all-products/all-products.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
const routes: Routes = [
  { path: "singular", component: SingularComponent },
  { path: "new-product", component: NewProductComponent },
  { path: "", component: AllProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
