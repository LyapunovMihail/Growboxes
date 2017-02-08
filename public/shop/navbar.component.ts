
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'shop-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: [
  	'assets/css/bootstrapNavbarButtonFix.min.css',
  	'assets/css/font-awesome.min.css',
	'assets/css/bootstrap-theme.css',	
	'assets/css/main.css'   
  ]
})

export class NavbarComponent implements OnInit{
	showLogo = false;
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
	}
}