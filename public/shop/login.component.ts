import { Component} from '@angular/core';
import { Router} from '@angular/router'

@Component({
  selector: 'shop-login',
  templateUrl: 'login.component.html'
})

export class LoginComponent {
	constructor(
    private router: Router) {console.log("router: ", router) }
    
    goToRegister(): void {
   	console.log("gotoregister")
    this.router.navigate(['/register']);
  }
}