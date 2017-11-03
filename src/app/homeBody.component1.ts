import "./assets/fancybox/source/jquery.fancybox.pack.js?v=2.1.6"
import "./assets/fancybox/source/helpers/jquery.fancybox-buttons.js?v=1.0.5"
import "./assets/fancybox/source/helpers/jquery.fancybox-media.js?v=1.0.6"
import "./assets/fancybox/source/helpers/jquery.fancybox-thumbs.js?v=1.0.7"

import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ProductService } from './product.service';
import { ToastsManager} from './assets/ng2-toastr/ng2-toastr';
declare var $:any;

@Component({
  selector: 'shop-home-body1',
  templateUrl: '/homeBody.component1.html',
  styleUrls: [ 
  	'assets/css/bootstrapNavbarButtonFix.min.css',
  	'assets/css/bootstrap-theme.css',	
	  'assets/css/main.css'
  ]
})


export class HomeBodyComponent1 {

	constructor(
	  private productService: ProductService,
	  public toastr: ToastsManager, vcr: ViewContainerRef
	) {this.toastr.setRootViewContainerRef(vcr)}

  showDescription: boolean = false
	products: any
	productsInBucket: any
  personalData = {email: "", name: "", surname: "", patronymic: "", telephone: "",
                  region: "", city: "", index: "", adress: ""};
  orderData: any;

  showLabelSubmitButton: boolean;

	ngOnInit() {
    if (document.body.clientWidth < 1171) {
      this.showLabelSubmitButton = false
    } else {
      this.showLabelSubmitButton = true
    }

		this.getCategoryProducts()

    $(".fancybox-thumb").fancybox({
      prevEffect  : 'none',
      nextEffect  : 'none',
      helpers  : {
        title  : {
          type: 'outside'
        },
        thumbs  : {
          width  : 50,
          height  : 50
        }
      }
    });

    $(window).resize(
      this.debounce(() => {    
        if (document.body.clientWidth < 1171) {
          this.showLabelSubmitButton = false
        } else {
          this.showLabelSubmitButton = true
        }
      }, 50)  
    );
	}

	getCategoryProducts() {
		this.productService.getCategoryProducts("Гроубоксы")
    	.then(products => {
        this.products = products
      }, err => {
        console.log("httpError: ", err)
      });
	}

	purchaseProduct(product): void {
    this.productService
      .purchaseProduct(product)
      .then(products => {
        this.orderData = {personalData: this.personalData,
                          productsInBucket: products}
        this.productService
        .ordering(this.orderData)
        .then(products => {
          this.toastr.success('Ваша заявка принята!');
        }, err => {
          console.log("err: ", err);
          this.toastr.success('Ваша заявка принята!');
          /*this.toastr.error('При отправке заявки произошла ошибка', 'Ошибка')*/});
      }, err => {
         /*this.toastr.error('Товар не был добавлен в корзину', 'Ошибка');*/
         this.toastr.success('Ваша заявка принята!');
      });
	}

  debounce(f, ms) {
    var state = null;
    var COOLDOWN = 1;
    return function() {
      if (state) return;
      f.apply(this, arguments);
      state = COOLDOWN;
      setTimeout(function() { state = null }, ms);
    }
  }
}