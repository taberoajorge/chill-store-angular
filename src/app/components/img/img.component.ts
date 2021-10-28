import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  AfterViewInit,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.sass'],
})
export class ImgComponent
implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  // counter: number = 0;
  // endCounter: number | undefined;

  img: string = '';

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    // console.log('Solo la imagen cambio =>', this.img);
  }

  @Output() loaded = new EventEmitter < string > ();

  imageDefault: string = 'https://www.m2crowd.com/core/i/placeholder.png';

  constructor() {
    // console.log('constructor', 'imgValue =>', this.img);
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   // Cambios en los inputs
  //   // console.log('ngOnchanges', 'imgValue =>', this.img);
  //   // console.log('Estos son los cambios', changes);
  // }

  // ngOnInit(): void {
  //   // Aqui se corren cosas asincronas, fetch, llamadas API, promesas

  //   // console.log('ngOnInit', 'imgValue =>', this.img);

  //   // this.endCounter = window.setInterval(() => {
  //   //   this.counter += 1;
  //   //   console.log('Run counter');
  //   // }, 1000);
  // }

  // ngAfterViewInit() {
  //   // Este se ejecuta despues del renderizado

  //   // console.log('ngAfterViewInit');
  // }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    // window.clearInterval(this.endCounter);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoad() {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }
}
