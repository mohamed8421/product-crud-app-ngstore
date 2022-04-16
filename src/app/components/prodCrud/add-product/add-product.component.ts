import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  
  
   addProductForm:any=new FormGroup({});
  constructor(
    private router:Router ,
     private ProductService:ProductService ,
     private FormBuilder:FormBuilder,
     
     ) { }

  ngOnInit(): void {
    this.addProductForm=this.FormBuilder.group({
      'title': new FormControl(''),
      'price': new FormControl(''),
      'image': new FormControl(''),
    })
  }
  save(){
    
    this.ProductService.addProduct(this.addProductForm.value).subscribe(data=>this.addProductForm=data);
    alert("product is updated")
    this.router.navigateByUrl("admin/all-products")
    console.log(this.addProductForm.value); 
  }
   
}
  
  
 




