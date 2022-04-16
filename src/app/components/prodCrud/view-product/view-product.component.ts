import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  viewProduct:any;
  productId:string="";
  constructor(private productservice:ProductService , private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(data=>this.productId=data['id'])
    this.productservice.veiwProduct(this.productId).subscribe(data=>this.viewProduct=data)
  }

}
