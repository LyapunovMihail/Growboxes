import { Component, OnInit} from '@angular/core';
declare var $:any;

import "assets/js/widgets.js";
import "assets/js/jquery.js";
import "assets/js/google-code-prettify/prettify.js";
import "assets/js/application.js";
import "assets/js/bootstrap-transition.js";
import "assets/js/bootstrap-modal.js";
import "assets/js/bootstrap-scrollspy.js";
import "assets/js/bootstrap-alert.js";
import "assets/js/bootstrap-dropdown.js";
import "assets/js/bootstrap-tab.js";
import "assets/js/bootstrap-tooltip.js";
import "assets/js/bootstrap-popover.js";
import "assets/js/bootstrap-button.js";
import "assets/js/bootstrap-collapse.js";
import "assets/js/bootstrap-carousel.js";
import "assets/js/bootstrap-typeahead.js";
import "assets/js/bootstrap-affix.js";
import "assets/js/jquery.lightbox-0.5.js";
import "assets/js/bootsshoptgl.js";

@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: '/index.html'
})



export class AppComponent implements OnInit{
	
	
	ngOnInit() {
		$(function() {
        $('#gallery a').lightBox();
    });
	}

}

