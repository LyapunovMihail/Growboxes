
import { Component, OnInit, Input} from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'shop-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: [
  	'assets/css/bootstrapNavbarButtonFix.min.css',
		'assets/css/bootstrap-theme.css',	
		'assets/css/main.css',
		'assets/css/progressusStyles.css'   
  ]
})

export class NavbarComponent implements OnInit{

	constructor(private productService: ProductService) {
		productService.onPurchased$.subscribe(number => {this.numberOfPurchasedProducts = number;
			console.log("this.numberOfPurchasedProducts: ", this.numberOfPurchasedProducts)
		});  
  }

	numberOfPurchasedProducts = 0;

 /* @Input()
	  set numberOfPurchasedProducts(numberOfPurchasedProducts: number) {
	    this._numberOfPurchasedProducts = numberOfPurchasedProducts
	    console.log("this._numberOfPurchasedProducts: ", this._numberOfPurchasedProducts)
	  }

	  get numberOfPurchasedProducts(): number { return this._numberOfPurchasedProducts }
 */

	ngOnInit() {
		/*function windowSize(){
				console.log("windowWidth: ", $(window).width())
				console.log("this.showLogo: ", this.showLogo)
		    if ($(window).width() < '980'){
		        this.showLogo = true
		    } else {
		        this.showLogo = false
		    }
		}
		$(window).load(windowSize); // при загрузке
		$(window).resize(windowSize); // при изменении размеров
		// или "два-в-одном", вместо двух последних строк:
		$(window).on('load resize',windowSize);
		*/
		$(".headroom").headroom({
			"tolerance": 20,
			"offset": 50,
			"classes": {
				"initial": "animated",
				"pinned": "slideDown",
				"unpinned": "slideUp"
			}
		});

		this.getPurchasedProducts()
	}

	getPurchasedProducts(): void {
  this.productService
      .getPurchasedProducts()
      .then(products => {
        this.numberOfPurchasedProducts = products.numberOfPurchasedProducts
        console.log("this.numberOfPurchasedProducts: ", this.numberOfPurchasedProducts)
      });
  }

}