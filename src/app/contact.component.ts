import { Component, ViewContainerRef } from '@angular/core';
import { ProductService } from './product.service';
import { ToastsManager } from './assets/ng2-toastr/ng2-toastr';

@Component({
  selector: 'shop-contact',
  templateUrl: 'contact.component.html',
  styleUrls: [
  	'assets/css/bootstrapNavbarButtonFix.min.css',
  	'assets/css/bootstrap-theme.css',	
		'assets/css/main.css'
  ]
})


export class ContactComponent {

	constructor(
	    private productService: ProductService,
    	public toastr: ToastsManager, vcr: ViewContainerRef) { 
    	this.toastr.setRootViewContainerRef(vcr);
	}

	data = {name: "", email: "", telephone: "", text: ""}

	sendMail() {
		this.productService
      .sendMail(this.data)
      .then(response => {
      	this.toastr.success('Сообщение отправлено');
      	this.data = {name: "", email: "", telephone: "", text: ""};
      }, err => this.toastr.error('Сообщение не отправлено', 'Ошибка'));
	}
}