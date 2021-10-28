import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Product } from "../../models/product.model";

import { StoreService } from "../../services/store.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  totalAmount:number = 0;
  myShopingCart: Product[] = [];

  products: Product[] = [
    {
      id: '1',
      name: 'EL mejor juguete',
      price: 565,
      image: '../../../assets/images/doll.jpg',
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: '../../../assets/images/cuadros.webp',
    },
    {
      id: '3',
      name: 'Colleción de albumnes',
      price: 34,
      image: '../../../assets/images/tren.jpg',
    },
    {
      id: '4',
      name: 'Casita',
      price: 23,
      image: '../../../assets/images/casa.jpg',
    },
  ];

  constructor(
    private storeService:StoreService
  ) {
    this.myShopingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
  }

  onAddToShopingCart(product: Product){
    this.storeService.addProduct(product);
    this.totalAmount = this.storeService.getTotal();
  }

}
