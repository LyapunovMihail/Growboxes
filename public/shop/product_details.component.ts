import "assets/fancybox/source/jquery.fancybox.pack.js?v=2.1.6"
import "assets/fancybox/source/helpers/jquery.fancybox-buttons.js?v=1.0.5"
import "assets/fancybox/source/helpers/jquery.fancybox-media.js?v=1.0.6"
import "assets/fancybox/source/helpers/jquery.fancybox-thumbs.js?v=1.0.7"

import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { ProductService } from './product.service';
import { ToastsManager} from './node_modules/ng2-toastr/ng2-toastr';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'shop-product-details',
  templateUrl: 'product_details.component.html',
  styleUrls: [
  	'assets/bootshop/css/bootstrap.css',
  	'assets/bootshop/css/bootstrap-responsive.css',
	'assets/bootshop/angular_components/style.css',	
	'assets/bootshop/js/google-code-prettify/prettify.css',
	'assets/css/progressusStyles.css',
	'assets/css/font-awesome.min.css'  
  ]
})

export class ProductDetailsComponent implements OnInit {
	constructor(
	  private productService: ProductService,
	  public toastr: ToastsManager, vcr: ViewContainerRef,
	  private route: ActivatedRoute
	) {this.toastr.setRootViewContainerRef(vcr)}

	categories = {"Гроубоксы": "growboxes", "Свет": "lights", "Автоматизация": "automatics" }
	top  = '0'
	productDetail: any
	products: any
	productsInBucket: any

	ngOnInit() {

		this.route.params
	    .switchMap((params: Params) => this.productService.getProductDetails(params['id']))
	    .subscribe(productDetail => { 
	    	this.productDetail = productDetail;
	    	console.log("product_details: ", productDetail);
	    	this.getCategoryProducts()
	    }, err => console.log("httpError: ", err) );

		$(".fancybox-thumb").fancybox({
			prevEffect	: 'none',
			nextEffect	: 'none',
			helpers	: {
				title	: {
					type: 'outside'
				},
				thumbs	: {
					width	: 50,
					height	: 50
				}
			}
		});

		$(window).resize(
			this.debounce(() => {		
				if (document.body.clientWidth < 962) {
					this.top = '13px'
				} else {
					this.top = '0'
				}
			}, 50)	
		);
	}

	getCategoryProducts() {
		this.productService.getCategoryProducts(this.productDetail.category)
    	.then(products => this.products = products,
                err => console.log("httpError: ", err) );
	}

	purchaseProduct(product): void {
    console.log("product: ", product)
    this.productService
      .purchaseProduct(product)
      .then(products => {
        console.log("productsInBucket: ", products)
        this.productsInBucket = products
        this.productService.onPurchased(this.productsInBucket.numberOfPurchasedProducts)
        this.toastr.success('Товар добавлен в корзину');
      }, err => {
         this.toastr.error('Товар не был добавлен в корзину', 'Ошибка');
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