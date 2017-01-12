import { Component, OnInit} from '@angular/core';
let $ = require("assets/js/jquery");

@Component({
  selector: 'shop-sidebar',
  templateUrl: 'sidebar.component.html'
})


export class SidebarComponent implements OnInit {
	
	ngOnInit() {

		console.log("ngOnInit", $("#sidebar .subMenu"));

		$("#sidebar .subMenu").on("click", (e) => {
			console.log("ngOnInit.click", e);
			let el = $(e.target).parent();
			$(el).toggleClass("open");
			if ($(el).hasClass("open")) {
				$(el).find("ul").show();
			} else {
				$(el).find("ul").hide();
			}
		});

/*
		 // side bar
    $('.bs-docs-sidenav').affix({
      offset: {
        top: function () { return $window.width() <= 980 ? 290 : 210 }
      , bottom: 270
      }
    });
*/

	}
}