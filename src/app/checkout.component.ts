import { Component, OnInit} from '@angular/core';
import { ProductService } from './product.service';
import { REGIONS } from './regions';

@Component({
  selector: 'shop-checkout',
  templateUrl: 'checkout.component.html',
  styleUrls: [
  	'assets/bootshop/css/bootstrap.css',
  	'assets/bootshop/css/bootstrap-responsive.css',
	  'assets/bootshop/css/style.css',	
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
  personalData = {email: "", name: "", surname: "", patronymic: "", telephone: "",
                  region: "Алтайский край", city: "", index: "", adress: ""};
  orderData: any;
  incorrectOrder = false;
  successedOrder = false;

  regions: String[];
	ngOnInit() {
    console.log("REGIONS: ", REGIONS);
    this.regions = REGIONS;
		this.getPurchasedProducts()
	}

	getPurchasedProducts(): void {
	  this.productService
      .getPurchasedProducts()
      .then(products => {
        this.productsInBucket = products.products
        this.sumPrice = products.sumPrice
        console.log("productsInBucket: ", products)
        this.orderData = {personalData: this.personalData,
                          productsInBucket: products}
      });
	}

	deleteProduct(item) {
  	this.productService
      .deletePurchasedProduct(item)
      .then(products => {
        console.log("productsInBucket: ", products)
        this.productsInBucket = products.products
        this.sumPrice = products.sumPrice
        this.orderData.productsInBucket = products
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
        this.orderData.productsInBucket = products
        this.productService.onPurchased(products.numberOfPurchasedProducts)
      });
  	}, 0)
    //this.router.navigate(['/checkout']);
	}

  ordering() {
      this.productService
      .ordering(this.orderData)
      .then(products => {
        console.log("productsInBucket: ", products)
        this.productsInBucket = products.products
        this.sumPrice = products.sumPrice
        this.successedOrder = true
        this.productService.onPurchased(products.numberOfPurchasedProducts)
      }, err => {this.incorrectOrder = true; console.log("err: ", err)});
    //this.router.navigate(['/checkout']);
  }
}