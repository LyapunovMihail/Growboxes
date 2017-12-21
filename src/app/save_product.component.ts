import { Component, OnInit, ViewContainerRef} from '@angular/core';
import { ProductService } from './product.service';
import {NgForm} from '@angular/forms';
import { ToastsManager} from './assets/ng2-toastr/ng2-toastr';

@Component({
  selector: 'shop-save-product',
  templateUrl: 'save_product.component.html',
  styleUrls: [
  	'assets/bootshop/css/bootstrap.css',
  	'assets/bootshop/css/bootstrap-responsive.css',
	  'assets/bootshop/css/style.css',	
	  'assets/bootshop/js/google-code-prettify/prettify.css',
	  'assets/css/progressusStyles.css'
  ]
})

export class SaveProductComponent implements OnInit{

	data = {name: "", category: "", properties: {size: "", weight: "", light: "",
          ventilation: "", covering: "", other: ""}, description: "", price: "", imgUrl: "", imgUrl1: "",
          imgUrl2: "", imgUrl3: "", imgUrl4: "", imgUrl5: "", imgUrl6: ""}
	passwordToAccess = ""
  access = {access: false, passwordChecked: false} 
	view = {currentView: "editProducts"}
  products: any
  categories = ["Гроубоксы", "Свет", "Автоматизация"]

	constructor(
    private productService: ProductService,
    public toastr: ToastsManager, vcr: ViewContainerRef) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

	ngOnInit() {
		
	}

	saveProduct(data): void {
    this.productService
        .saveProduct(data)
        .then(product => {
          this.toastr.success('Товар добавлен в базу данных')
        }, err => {
        		console.log("httpError: ", err);
	          if (data.name == '' || data.category == '' || data.description == '' || data.price == '')
	            this.toastr.error('Не введены имя, категория, описание или цена', 'Ошибка добавления')
	          else
	            this.toastr.error('Этот товар уже в базе', 'Ошибка добавления')
        	} );
  }

  updateProduct(data): void {
    this.productService
        .updateProduct(data)
        .then(product => {
          this.toastr.success('Товар обновлен')
        }, err => {console.log("httpError: ", err);
           this.toastr.error('Товар с таким именем не найден', 'Ошибка обновления')} );
  }

	deleteProduct(item): void {
    if (window.confirm("Вы действительно хотите удалить товар?") == true) {
      this.productService
        .deleteProduct(item)
        .then(response => {
          if (response.product.n == 0) {
            this.toastr.error('Товар не найден', 'Ошибка удаления');
          } else {
            this.toastr.success('Товар удалён '+response.message);
          }

          this.getProducts()
          this.productService.onPurchased(response.numberOfPurchasedProducts);
        }, err => {console.log("httpError: ", err)} );
    }
  }

  getProducts(): void {
    this.productService
      .getProducts()
      .then(products => {
              this.products = products
            }, err => console.log("httpError: ", err) );
  }
  changeView() {
    if (this.view.currentView == 'editProducts') {
      this.view.currentView = 'showProducts'
      this.getProducts()
    } else {
      this.view.currentView = 'editProducts'
    }
  }

  editProduct(item) {
    this.data = item
    this.changeView()
  }

  getAccessToProductsManagement(): void {
    this.productService
      .getAccessToProductsManagement(this.passwordToAccess)
      .then(result => {
                        this.access.access = result.access
                        this.access.passwordChecked = true
                      }, err => console.log("httpError: ", err) );
  }

  appearanceOfErrorPassword() {
    if(this.passwordToAccess == '') 
      this.access.passwordChecked = false
  }

}