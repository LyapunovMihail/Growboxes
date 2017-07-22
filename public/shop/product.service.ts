import { Injectable, EventEmitter }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductService {
	
	public onPurchased$: EventEmitter<number> = new EventEmitter<number>();
 
  constructor(private http: Http) { }

  onPurchased(numberOfPurchasedProducts) {
  	this.onPurchased$.emit(numberOfPurchasedProducts)
  }


  saveProduct(data): Promise<any> {
    return this.http.post("/api/products", data)
               .toPromise()
               .then(response =>  Promise.resolve(response.json()) )
               .catch(this.handleError);
  }

  updateProduct(data): Promise<any> {
    return this.http.post("/api/productsUpdate", data)
               .toPromise()
               .then(response =>  Promise.resolve(response.json()) )
               .catch(this.handleError);
  }

  deleteProduct(data): Promise<any> {
  	console.log("data: ", data)
    return this.http.post("/api/productsDelete", data)
               .toPromise()
               .then(response =>  Promise.resolve(response.json()) )
               .catch(this.handleError);
  }

  getProducts(): Promise<any> {
    return this.http.get("/api/products")
               .toPromise()
               .then(response =>  Promise.resolve(response.json()) )
               .catch(this.handleError);
  }

  getCategoryProducts(category): Promise<any> {
    return this.http.post("/api/categoryProducts", {category})
               .toPromise()
               .then(response =>  Promise.resolve(response.json()) )
               .catch(this.handleError);
  }

  getProductDetails(productId): Promise<any> {
  	console.log("productId: ", productId)
    return this.http.post("/api/product_details", {productId})
               .toPromise()
               .then(response =>  Promise.resolve(response.json()) )
               .catch(this.handleError);
  }

  purchaseProduct(product): Promise<any> {
  	console.log("product: ", product)
    return this.http.post("/api/purchase", product)
               .toPromise()
               .then(response =>  Promise.resolve(response.json()) )
               .catch(this.handleError);
  }

  getPurchasedProducts(): Promise<any> {
    return this.http.get("/api/purchase")
               .toPromise()
               .then(response =>  Promise.resolve(response.json()) )
               .catch(this.handleError);
  }

  deletePurchasedProduct(item): Promise<any> {
    return this.http.post("/api/purchaseDelete", item)
               .toPromise()
               .then(response =>  Promise.resolve(response.json()) )
               .catch(this.handleError);
  }

  updatePurchasedProduct(item): Promise<any> {
    return this.http.post("/api/purchaseUpdate", item)
               .toPromise()
               .then(response =>  Promise.resolve(response.json()) )
               .catch(this.handleError);
  }

  getAccessToProductsManagement(password): Promise<any> {
    return this.http.post("/api/products/getAccess", {password})
               .toPromise()
               .then(response =>  Promise.resolve(response.json()) )
               .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}