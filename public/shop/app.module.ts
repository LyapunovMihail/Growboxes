import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { HeaderComponent } from './header.component';
import { SidebarComponent } from './sidebar.component';
import { FooterComponent } from './footer.component';
import { HomeCarouselComponent } from './homeCarousel.component';
import { HomeBodyComponent } from './homeBody.component';

import { SpecialOfferComponent } from './special_offer.component';

import { RouterModule }   from '@angular/router';

import "assets/js/widgets.js";
import "assets/js/jquery.js";
import "assets/js/google-code-prettify/prettify.js";
import "assets/js/application.js";
import "assets/js/bootstrap-transition.js";
import "assets/js/bootstrap-modal.js";
import "assets/js/bootstrap-scrollspy.js";
import "assets/js/bootstrap-alert.js";
import "assets/js/bootstrap-dropdown.js";
import "assets/js/bootstrap-tab.js";
import "assets/js/bootstrap-tooltip.js";
import "assets/js/bootstrap-popover.js";
import "assets/js/bootstrap-button.js";
import "assets/js/bootstrap-collapse.js";
import "assets/js/bootstrap-carousel.js";
import "assets/js/bootstrap-typeahead.js";
import "assets/js/bootstrap-affix.js";
import "assets/js/jquery.lightbox-0.5.js";
import "assets/js/bootsshoptgl.js";

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
	        path: 'special_offer',
	        component: SpecialOfferComponent
	   }
	]) 
  ],
  declarations: [ 
  	AppComponent,
  	NavbarComponent,
  	HeaderComponent,
  	SidebarComponent,
  	HomeCarouselComponent,
  	HomeBodyComponent,
  	FooterComponent,

  	SpecialOfferComponent
  ],
  bootstrap: [ 
  	AppComponent 
  ]
})
export class AppModule { }