import "http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js";
import "http://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js";
import "assets/js/headroom.min.js";
import "assets/js/jQuery.headroom.min.js";
import "assets/js/template.js";



import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { HeaderComponent } from './header.component';
//import { SidebarComponent } from './sidebar.component';
import { FooterComponent } from './footer.component';
//import { HomeCarouselComponent } from './homeCarousel.component';

import { HomeBodyComponent } from './homeBody.component';
	import { HomeBodyComponent1 } from './homeBody.component1';
	import { HomeBodyComponent2 } from './homeBody.component2';
//import { SpecialOfferComponent } from './special_offer.component';
//import { NormalComponent } from './normal.component';
import { AboutUsComponent } from './aboutUs.component';
import { ContactComponent } from './contact.component';

import { ProductsComponent } from './products.component';
import { ProductSummaryComponent } from './product_summary.component';
import { ProductDetailsComponent } from './product_details.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

import { RouterModule }   from '@angular/router';



@NgModule({
  imports: [ 
	BrowserModule,
	RouterModule.forRoot([
	   {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
       },
	   {
	        path: 'home',
	        component: HomeBodyComponent
	   },
	   {
	        path: 'about_us',
	        component: AboutUsComponent
	   },
	   {
	        path: 'contact',
	        component: ContactComponent
	   },
	   {
	        path: 'products',
	        component: ProductsComponent
	   },
	   {
	        path: 'product_summary',
	        component: ProductSummaryComponent
	   },
	   {
	        path: 'product_details',
	        component: ProductDetailsComponent
	   },
	   {
	        path: 'login',
	        component: LoginComponent
	   },
	   {
	        path: 'register',
	        component: RegisterComponent
	   }
	   
	]) 
  ],
  declarations: [ 
  	AppComponent,
  	NavbarComponent,
  	HeaderComponent,
  	FooterComponent,

  	HomeBodyComponent,
  		HomeBodyComponent1,
  		HomeBodyComponent2,

  	AboutUsComponent,
  	ContactComponent,

  	ProductsComponent,
  	ProductSummaryComponent,
  	ProductDetailsComponent,
  	LoginComponent,
  	RegisterComponent
  ],
  bootstrap: [ 
  	AppComponent 
  ]
})
export class AppModule { }