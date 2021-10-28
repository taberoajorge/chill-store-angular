import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../../models/product.model';
// import { HighlightDirective } from "../../directives/highlight.directive";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product = {
    id: '',
    price: 0,
    image: '',
    title: '',
    description: '',
    category: '',
  };

  @Output() addedProdcut = new EventEmitter<Product>();


  constructor() {}

  ngOnInit(): void {}

  onAddTocart(){
    this.addedProdcut.emit(this.product)
  }

}
