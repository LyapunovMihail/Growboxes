import { Component, OnInit} from '@angular/core';
declare var $:any;

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

