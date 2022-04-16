import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any;

  constructor( private productservice:ProductService) { }

  ngOnInit(): void {
    this.productservice.getAll().subscribe(data=>this.products=data)
    }
    
  }


