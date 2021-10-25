import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.sass']
})
export class ImgComponent implements OnInit {


   @Input() img : string = 'my-store';

  constructor() { }

  ngOnInit(): void {
  }

}
