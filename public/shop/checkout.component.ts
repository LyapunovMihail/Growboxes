import { Component, OnInit} from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'shop-checkout',
  templateUrl: 'checkout.component.html',
  styleUrls: [
  	'assets/bootshop/css/bootstrap.css',
  	'assets/bootshop/css/bootstrap-responsive.css',
	  'assets/bootshop/angular_components/style.css',	
	  'assets/bootshop/js/google-code-prettify/prettify.css',
	  'assets/css/progressusStyles.css'   
  ]
})

export class CheckoutComponent implements OnInit{
	constructor(
	    private productService: ProductService) { 
	}

	productsInBucket: any;
  sumPrice: number = 0;

	ngOnInit() {
		this.getPurchasedProducts()
	}

	getPurchasedProducts(): void {
	  this.productService
      .getPurchasedProducts()
      .then(products => {
        this.productsInBucket = products.products
        this.sumPrice = products.sumPrice
        console.log("productsInBucket: ", products)
      });
	}

	deleteProduct(item) {
  	this.productService
      .deletePurchasedProduct(item)
      .then(products => {
        console.log("productsInBucket: ", products)
        this.productsInBucket = products.products
        this.sumPrice = products.sumPrice
        this.productService.onPurchased(products.numberOfPurchasedProducts)
      });
	}

	updateProduct(item) {
  	setTimeout(() => {
  		this.productService
      .updatePurchasedProduct(item)
      .then(products => {
        console.log("productsInBucket: ", products)
        this.productsInBucket = products.products
        this.sumPrice = products.sumPrice
        this.productService.onPurchased(products.numberOfPurchasedProducts)
      });
  	}, 0)
    //this.router.navigate(['/checkout']);
	}

}