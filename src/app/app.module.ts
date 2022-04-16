import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProductsComponent } from './components/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './Services/product.service';






import { AddProductComponent } from './components/prodCrud/add-product/add-product.component';
import { DeletProductComponent } from './components/prodCrud/delet-product/delet-product.component';
import { EditProductComponent } from './components/prodCrud/edit-product/edit-product.component';
import { ViewProductComponent } from './components/prodCrud/view-product/view-product.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    NotfoundComponent,
    SignupComponent,
    ProductsComponent,
    AddProductComponent,
    DeletProductComponent,
    EditProductComponent,
    ViewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,ReactiveFormsModule
 
    //ɵAngularFireSchedulers //.initializeApp(environment.firebase)
  ],
  providers: [ProductService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
