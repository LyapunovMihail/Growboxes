import { Component, OnInit} from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-root',
  moduleId: module.id,
  templateUrl: 'app.component.html',
  styleUrls: [  
  	'assets/css/bootstrapNavbarButtonFix.min.css'
  ]
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

