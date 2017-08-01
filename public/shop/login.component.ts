import { Component} from '@angular/core';
import { Router} from '@angular/router'

@Component({
  selector: 'shop-login',
  templateUrl: 'login.component.html',
  styleUrls: [ 
	  'assets/css/bootstrap.min.css',
	  'assets/css/bootstrap-theme.css',
	  'assets/css/main.css'  
  ]
})

export class LoginComponent {
	constructor(
    private router: Router) {console.log("router: ", router) }
    
    goToRegister(): void {
   	console.log("gotoregister")
    this.router.navigate(['/register']);
  }
}