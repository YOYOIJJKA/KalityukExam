import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormForAddingComponent } from './Adding/form-for-adding/form-for-adding.component';
import { DescriptionComponent } from './MainPage/description/description.component';
import { ListOfProductsComponent } from './Products/list-of-products/list-of-products.component';

const routes: Routes = [
  {
    path:"",
    component:DescriptionComponent
  },
  {
    path:"list",
    component:ListOfProductsComponent
  } ,
  {
    path:"adding",
    component:FormForAddingComponent
  },
  {
    path:"adding/:id",
    component:FormForAddingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
