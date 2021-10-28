import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Product } from "../../models/product.model";

import { StoreService } from "../../services/store.service";
import { ProductsService } from "../../services/products.service";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  totalAmount:number = 0;
  myShopingCart: Product[] = [];

  products: Product[] = [];

  constructor(
    private storeService:StoreService,
    private productsService: ProductsService
  ) {
    this.myShopingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {

    this.productsService.getAllProducts()
    .subscribe(data =>{

      this.products = data;

    })
  }

  onAddToShopingCart(product: Product){
    this.storeService.addProduct(product);
    this.totalAmount = this.storeService.getTotal();
  }

}
