import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import {ToastModule} from './assets/ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { TopHeaderComponent } from './top_header.component';
//import { NavbarComponent } from './navbar.component';
//import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';

import { HomeBodyComponent } from './homeBody.component';
	import { HomeBodyComponent1 } from './homeBody.component1';
	import { HomeBodyComponent2 } from './homeBody.component2';

//import { AboutUsComponent } from './aboutUs.component';
import { ContactComponent } from './contact.component';

//import { ProductsComponent } from './products.component';
//import { ProductDetailsComponent } from './product_details.component';
//import { ProductSummaryComponent } from './product_summary.component';
//import { CheckoutComponent } from './checkout.component';
//import { LoginComponent } from './login.component';
//import { RegisterComponent } from './register.component';

//import { SaveProductComponent } from './save_product.component';

import { ProductService } from './product.service';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

@NgModule({
  imports: [ 
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	HttpModule,
	ToastModule.forRoot(),
	RouterModule.forRoot([
	   {
	        path: '',
	        component: HomeBodyComponent
       },
	   /*{
	        path: 'home',
	        component: HomeBodyComponent
	   },*/
	   /*{
	        path: 'about_us',
	        component: AboutUsComponent
	   },*/
	   {
	        path: 'contact',
	        component: ContactComponent
	   }
	   /*{
	        path: 'products/:id',
	        component: ProductsComponent
	   },
	   {
	        path: 'product_summary',
	        component: ProductSummaryComponent
	   },
	   {
	        path: 'checkout',
	        component: CheckoutComponent
	   },
	   {
	        path: 'product_details/:id',
	        component: ProductDetailsComponent
	   },*/
	   /*{
	        path: 'login',
	        component: LoginComponent
	   },
	   {
	        path: 'register',
	        component: RegisterComponent
	   },
	   {
	        path: 'save_product',
	        component: SaveProductComponent
	   }*/
	   
	]) 
  ],
  declarations: [ 
  	AppComponent,
  	TopHeaderComponent,
  	//NavbarComponent,
  	//HeaderComponent,
  	FooterComponent,

  	HomeBodyComponent,
  		HomeBodyComponent1,
  		HomeBodyComponent2,

  	//AboutUsComponent,
  	ContactComponent,

  	//ProductsComponent,
  	//ProductSummaryComponent,
  	//CheckoutComponent,
  	//ProductDetailsComponent,
  	//LoginComponent,
  	//RegisterComponent,

  	//SaveProductComponent
  ],
  providers: [ ProductService ],
  bootstrap: [ 
  	AppComponent 
  ]
})
export class AppModule { }