import { Component, OnInit, ViewContainerRef} from '@angular/core';
import { ProductService } from './product.service';
import {NgForm} from '@angular/forms';
import { ToastsManager} from './node_modules/ng2-toastr/ng2-toastr';

@Component({
  selector: 'shop-save-product',
  templateUrl: 'save_product.component.html',
  styleUrls: [
  	'assets/bootshop/css/bootstrap.css',
  	'assets/bootshop/css/bootstrap-responsive.css',
	  'assets/bootshop/angular_components/style.css',	
	  'assets/bootshop/js/google-code-prettify/prettify.css',
	  'assets/css/progressusStyles.css'
  ]
})

export class SaveProductComponent implements OnInit{

	data = {name: "", category: "", description: "", price: "", imgUrl: "", imgUrl1: "",
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
	console.log("data: ", data)
    this.productService
        .saveProduct(data)
        .then(product => {console.log("product: ", product);
          this.toastr.success('Товар добавлен в базу данных')
        }, err => {console.log("httpError: ", err);
          if (data.name == '' || data.category == '' || data.description == '' || data.price == '')
            this.toastr.error('Не введены имя, категория, описание или цена', 'Ошибка добавления')
          else
            this.toastr.error('Этот товар уже в базе', 'Ошибка добавления')} );
  }

  updateProduct(data): void {
  console.log("data: ", data)
    this.productService
        .updateProduct(data)
        .then(product => {console.log("product: ", product);
          this.toastr.success('Товар обновлен')
        }, err => {console.log("httpError: ", err);
           this.toastr.error('Товар с таким именем не найден', 'Ошибка обновления')} );
  }

	deleteProduct(item): void {
    console.log("item: ", item)
    if (window.confirm("Вы действительно хотите удалить товар?") == true) {
      this.productService
        .deleteProduct(item)
        .then(response => {console.log("response: ", response);
          if (response.product.n == 0) {
            this.toastr.error('Товар не найден', 'Ошибка удаления');
          } else {
            this.toastr.success('Товар удалён'+response.message);
          }

          this.getProducts()
          this.productService.onPurchased(response.numberOfPurchasedProducts);
        }, err => {console.log("httpError: ", err)} );
    }
  }

  getProducts(): void {
    this.productService
      .getProducts()
      .then(products => {console.log("products: ", products);
              this.products = products},
            err => console.log("httpError: ", err) );
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
    console.log("this.passwordToAccess: ", this.passwordToAccess)
    this.productService
      .getAccessToProductsManagement(this.passwordToAccess)
      .then(result => {console.log("result: ", result);
                        this.access.access = result.access
                        this.access.passwordChecked = true
                      }, err => console.log("httpError: ", err) );
  }

  appearanceOfErrorPassword() {
    if(this.passwordToAccess == '') 
      this.access.passwordChecked = false
  }

}