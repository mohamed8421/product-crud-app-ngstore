import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:any;
  constructor(private productService: ProductService) { 

    
  }

  ngOnInit(): void {
     this.productService.getAll().subscribe(data => this.products = data );
   
   
 }
 

  addtocart(i:number){ 
    console.log('added',this.products[i])
  }


}