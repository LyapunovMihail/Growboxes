import "assets/js/fancybox/source/jquery.fancybox.pack.js?v=2.1.6";
import "assets/js/fancybox/source/helpers/jquery.fancybox-buttons.js?v=1.0.5";
import "assets/js/fancybox/source/helpers/jquery.fancybox-media.js?v=1.0.6";
import "assets/js/fancybox/source/helpers/jquery.fancybox-thumbs.js?v=1.0.7";

import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'shop-product-details',
  templateUrl: 'product_details.component.html',
  styleUrls: [ 'product_details.component.css' ]
})

export class ProductDetailsComponent implements OnInit {

	ngOnInit() {
			$(document).ready(function() {
				$(".fancybox").fancybox({
					openEffect	: 'none',
					closeEffect	: 'none'
				});
			});	
	}
	
}