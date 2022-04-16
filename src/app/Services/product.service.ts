
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
dbUrl:string='https://fakestoreapi.com/'
  
  constructor(private http:HttpClient) {
    
    
   }
 
  getAll(){
    return this.http.get(this.dbUrl+'products');
   
  }
  veiwProduct(id:any){
    return  this.http.get(this.dbUrl+'products/'+ id);
  }
  
  addProduct(item:any){
    return this.http.post(this.dbUrl+'products', item);
  }

  deletProduct(id:any){
    return this.http.delete(this.dbUrl+'products/'+ id);
  }
  updateProduct(id:any,item:any){
    return this.http.put(this.dbUrl+'products/'+ id, item);
  }

}
