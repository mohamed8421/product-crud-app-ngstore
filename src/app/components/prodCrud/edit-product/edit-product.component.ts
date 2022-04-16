import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productInfo: any;
  productId: string = "";
  datalouded:boolean = false

  constructor(
    private router: Router,
    private ProductService: ProductService,
    private ActivatedRoute: ActivatedRoute

  ) { }

  ngOnInit(): void {

    this.ActivatedRoute.params.subscribe(data => this.productId = data['id']);
    // this.ProductService.veiwProduct(this.productId).subscribe(data=>this.productInfo=data);
    if (this.productId !== "") {
      this.datalouded= false
      // this.ProductService.veiwProduct(this.productId).toPromise().then(data=>this.productInfo=data)
      this.ProductService.veiwProduct(this.productId).subscribe(data => this.productInfo = data);

      


    }
    this.datalouded= true
  }
  save() {
   this.ProductService.updateProduct(this.productId,this.productInfo)
   console.log(this.productInfo)
   alert("product is updated")
   this.router.navigateByUrl("admin/all-products")
  }
 
}
