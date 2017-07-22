import { Component, OnInit} from '@angular/core';
declare var $:any;

@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: 'index.html'
})



export class AppComponent implements OnInit{
	
	numberOfPurchasedProducts: number = 0

	ngOnInit() {
		
	}

	onPurchased(numberOfPurchasedProducts: number) {
    this.numberOfPurchasedProducts = numberOfPurchasedProducts
    console.log("this.numberOfPurchasedProducts: ", this.numberOfPurchasedProducts)
  }
}

