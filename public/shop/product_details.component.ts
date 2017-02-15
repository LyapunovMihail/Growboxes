import "assets/fancybox/source/jquery.fancybox.pack.js?v=2.1.6"
import "assets/fancybox/source/helpers/jquery.fancybox-buttons.js?v=1.0.5"
import "assets/fancybox/source/helpers/jquery.fancybox-media.js?v=1.0.6"
import "assets/fancybox/source/helpers/jquery.fancybox-thumbs.js?v=1.0.7"

import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'shop-product-details',
  templateUrl: 'product_details.component.html',
  styleUrls: [
  	'assets/bootshop/css/bootstrap.css',
  	'assets/bootshop/css/bootstrap-responsive.css',
	'assets/bootshop/angular_components/style.css',	
	'assets/bootshop/js/google-code-prettify/prettify.css',
	'assets/css/progressusStyles.css'  
  ]
})

export class ProductDetailsComponent implements OnInit {

	top  = '0'

	ngOnInit() {
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