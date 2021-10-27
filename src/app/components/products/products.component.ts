import { Component, OnInit } from '@angular/core';
import { Product } from "../../models/product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
