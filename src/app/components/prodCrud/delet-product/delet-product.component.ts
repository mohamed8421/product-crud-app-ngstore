import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-delet-product',
  templateUrl: './delet-product.component.html',
  styleUrls: ['./delet-product.component.css']
})
export class DeletProductComponent implements OnInit {
  productId:any;
  deletProduct:any;
  
  constructor(
    private ProductService:ProductService,
    private ActivatedRoute: ActivatedRoute,
    private Router:Router
   ) { }

  ngOnInit(): void {
    
    alert("item is deleted")
    this.Router.navigateByUrl("admin/all-products")
    this.ActivatedRoute.params.subscribe(data=>this.productId=data['id']);
    this.ProductService.deletProduct(this.productId).subscribe(data=>this.deletProduct=data);
    
    }
    

  }



