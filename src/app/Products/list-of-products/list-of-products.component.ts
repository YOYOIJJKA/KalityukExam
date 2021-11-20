import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Interfaces/product';
import { ProductsServiceService } from 'src/app/Services/products-service.service';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.css']
})
export class ListOfProductsComponent implements OnInit {
  AllProducts:Product[] = []
  AllProductsTerm: Product[] = []
  SelectedCategory:string = "0"
  SelectedSort: number =1
  Increase: number = 0
  descend = false
  constructor(private Service: ProductsServiceService) {
    
   }

  ngOnInit(): void {
   this.getProducts();

  }
  async getProducts()
  {
    try {
      this.AllProducts = await this.Service.getProducts()
    }
    catch(err){
      console.log(err)
    }
    finally{
      this.SortType(1)
    }
  }
  async deleteProduct(id:number){
    if(id!=0){
      try {
        await this.Service.deleteProduct(id)
        this.getProducts()
      }
      catch(err){
        console.log(err)
      }
  
    }
  }
FilterByCategory()
{
  this.AllProductsTerm = this.FilterByNumber()
  switch (this.SelectedCategory) {
    case "1":{
      return  this.AllProductsTerm.filter((Product)=>Product.category=="Мебель")
    };
    case "2":{
      return  this.AllProductsTerm.filter((Product)=>Product.category=="Техника")
    };
    case "3":{
      return  this.AllProductsTerm.filter((Product)=>Product.category=="Книги")
    };
    case "4":{
      return  this.AllProductsTerm.filter((Product)=>Product.category=="Телефоны")
    };
    default:
      return this.FilterByNumber() 
      break;
  }
} 
FilterByNumber()
  {
    let check = <any> document.getElementById("checkavailable")
    if(check.checked)
    {
      return this.AllProducts.filter((Product)=>Product.amount > 0)
    }
    else
    {
      return this.AllProducts
    }
}
async plusAmount(product: Product)
  {
    product.amount++;
      try 
      {
        this.Service.updateProduct(product)
      } 
      catch (error) 
      {
    
      }
    
  }
async minusAmount (product: Product)
    {
    if(product.amount>0){
      product.amount--;
      try 
      {
        this.Service.updateProduct(product)
      } 
      catch (error) 
      {
    
      }
    }
  }
  SortType (type:number)
  {
    this.Increase=type;
    this.SortElements()
    if (this.Increase==1)
    {
      this.descend=false
    }
    else
    {
      this.descend=true
    }
  }
  SortElements()
  { 
    this.AllProductsTerm = this.FilterByCategory()
    if (this.SelectedSort == 1){


    switch (this.Increase) {
     case 1:
      {
        return this.AllProductsTerm.sort((a,b) => a.price > b.price ? 1: a.price === b.price ? 0 : -1)
      }
      case 2:
        {
          this.AllProductsTerm = this.AllProductsTerm.sort((a,b) => a.price > b.price ? 1: a.price === b.price ? 0 : -1)
          return this.AllProductsTerm.reverse()
        }
    default:
      return this.AllProductsTerm
     } 
    }
    else
    {
      switch (this.Increase) {
        case 1:
         {
           return this.AllProductsTerm.sort((a,b) => a.amount > b.amount ? 1: a.amount === b.amount ? 0 : -1)
         }
         case 2:
           {
             this.AllProductsTerm= this.AllProductsTerm.sort((a,b) => a.amount > b.amount ? 1: a.amount === b.amount ? 0 : -1)
             return this.AllProductsTerm.reverse()
           }
           default:
            return this.AllProductsTerm
      }
    } 
  }
}