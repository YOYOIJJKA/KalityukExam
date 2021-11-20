import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../Interfaces/product';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor(private http: HttpClient) {}
  database = "http://localhost:3000/products"
  getProducts(): Promise<Product[]>
  { 
    return this.http.get<Product[]>(this.database).toPromise()
  }
  getProduct(id:number):Promise<Product>{
    return this.http.get<Product>(this.database+`/${id}`).toPromise()
  }
  postProduct(data:Product): Promise<Product>
  {
    return this.http.post<Product>(this.database, data).toPromise()
  }
  updateProduct(data:Product):Promise<Product>
  {
    return this.http.put<Product>(this.database+`/${data.id}`, data).toPromise()
  }
  deleteProduct(id:number): Promise<Product>
  {
    return this.http.delete<Product>(this.database+`/${id}`).toPromise()
  }
}
