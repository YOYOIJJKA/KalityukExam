import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Interfaces/product';
import { ProductsServiceService } from 'src/app/Services/products-service.service';

@Component({
  selector: 'app-form-for-adding',
  templateUrl: './form-for-adding.component.html',
  styleUrls: ['./form-for-adding.component.css']
})
export class FormForAddingComponent implements OnInit {

  constructor(private Service:ProductsServiceService,
              private activatedRoute:ActivatedRoute,
              private fb:FormBuilder,
              private router:Router) { }
  id: number | null = null
  productForm!:FormGroup
  product!:Product
  ngOnInit(): void {
    const controls = {
      name:     ["",[Validators.required]],
      price:    [0,[Validators.required,Validators.min(0)]],
      producer: [""],
      weight:   [0,[Validators.required,Validators.min(0)]],
      amount:   [1,[Validators.required,Validators.min(0)]],
      category: [1,[Validators.required]]
    }
    this.productForm = this.fb.group(controls)
    this.activatedRoute.params.subscribe((params)=>{
      this.id = params.id ?  +params.id:null
      if(this.id){
        this.getProduct(this.id)
      }
      console.log(this.id);
      
    })
  }
  async getProduct(id:number){
    try{
      this.product = await this.Service.getProduct(id)
      this.productForm.get('name')?.setValue(this.product.name)
      this.productForm.get('price')?.setValue(this.product.price)
      this.productForm.get('producer')?.setValue(this.product.producer)
      this.productForm.get('weight')?.setValue(this.product.weight)
      this.productForm.get('amount')?.setValue(this.product.amount)
      this.productForm.get('category')?.setValue(this.product.category)
    }catch(err){
      console.log(err);
    }
  }
  async createProduct(){
    let product:Product = this.productForm.value
    try{
      await this.Service.postProduct(product)
      this.router.navigate(["list"])
    }catch(err){
      console.log(err);
    }
  }
  async editProduct(){
    let product:Product = this.productForm.value
    if(this.id){
      product.id = this.id
    }
    try{
      await this.Service.updateProduct(product)
      this.router.navigate(["list"])
    }catch(err)
    {console.log(err);
    }
  }
  async deleteProduct(id:number){
      try {
        await this.Service.deleteProduct(id)
        this.router.navigate(["list"])
      }
      catch(err){
        console.log(err)
      }
  }
}
