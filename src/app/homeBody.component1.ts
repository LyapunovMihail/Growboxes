import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ProductService } from './product.service';
import { ToastsManager} from './assets/ng2-toastr/ng2-toastr';

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

	products: any
	productsInBucket: any

	ngOnInit() {
		this.getCategoryProducts()
	}

	getCategoryProducts() {
		this.productService.getCategoryProducts("Гроубоксы")
    	.then(products => this.products = products,
                err => console.log("httpError: ", err) );
	}

	purchaseProduct(product): void {
    this.productService
      .purchaseProduct(product)
      .then(products => {
        this.productsInBucket = products
        this.productService.onPurchased(this.productsInBucket.numberOfPurchasedProducts)
        this.toastr.success('Товар добавлен в корзину');
      }, err => {
         this.toastr.error('Товар не был добавлен в корзину', 'Ошибка');
      });
	}
}