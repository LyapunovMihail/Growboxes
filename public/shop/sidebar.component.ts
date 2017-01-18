import { Component, OnInit} from '@angular/core';
let $ = require("assets/js/jquery");

@Component({
  selector: 'shop-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css'],
})


export class SidebarComponent implements OnInit {

	isSidebarOpen = {
		subMenu1: false,
		subMenu2: false,
		subMenu3: false
	};

	menuTransition(id, name) {
		console.log("access")
		console.log("id: ", id)
		if (!this.isSidebarOpen[name]) {
			id.style.display = "block";
			id.style.transition = "display 1s ease-out 0s";
		}
		else {
			id.style.display = "none";
		}
		this.isSidebarOpen[name] = !this.isSidebarOpen[name];
		
	}

	ngOnInit() {

		//console.log("ngOnInit", $("#sidebar .subMenu"));
/*
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
*/
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