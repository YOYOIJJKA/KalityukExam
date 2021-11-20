import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './Header/menu/menu.component';
import { DescriptionComponent } from './MainPage/description/description.component';
import { ListOfProductsComponent } from './Products/list-of-products/list-of-products.component';
import { FormForAddingComponent } from './Adding/form-for-adding/form-for-adding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DescriptionComponent,
    ListOfProductsComponent,
    FormForAddingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
