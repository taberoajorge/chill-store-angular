import { Injectable } from '@angular/core';
import { Product } from "../models/product.model";
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShopingCart: Product[] = [];


  constructor() { }

  getShoppingCart(){
    return this.myShopingCart;
  }

  addProduct(product: Product){
    this.myShopingCart.push(product);
  }

    getTotal(){
      return this.myShopingCart.reduce((sum, item) => sum + item.price,0);
    }
}
