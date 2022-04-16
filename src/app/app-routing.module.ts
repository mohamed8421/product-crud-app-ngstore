import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AddProductComponent } from './components/prodCrud/add-product/add-product.component';
import { DeletProductComponent } from './components/prodCrud/delet-product/delet-product.component';
import { EditProductComponent } from './components/prodCrud/edit-product/edit-product.component';
import { ViewProductComponent } from './components/prodCrud/view-product/view-product.component';
import { ProductsComponent } from './components/products/products.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [

  {path:'home', component: HomeComponent },
  {path:'',redirectTo:"home",pathMatch:"full" },
  {path:'login', component: LoginComponent },
  {path:'signup', component: SignupComponent},
  {path:'admin/all-products',component:ProductsComponent},
  
  {path:'create',component:AddProductComponent},
  {path:'edit/:id',component:EditProductComponent},
  {path:'delet/:id',component:DeletProductComponent},
  {path:'view/:id',component:ViewProductComponent},
 
  {path:'**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
