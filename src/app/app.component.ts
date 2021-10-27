import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title: string = 'my-store';

  imgParent = '';

  showedImage: Boolean = true;





  toogleImage() {
    this.showedImage = !this.showedImage;
  }


  onLoaded(img: string) {
    console.log('Log padre', img);
  }

  // buttonStatus: boolean = true;
  // newName: any = '';


  // userData = {
  //   name: '',
  //   email: '',
  //   password: '',
  // };

  // onRegistrer() {
  //   console.log(this.userData);
  // }

  // products = [
  //   {
  //     name: 'bici',
  //     price: 565,
  //     image: './assets/images/bici.jpg',
  //     category: 'all',
  //   },
  //   {
  //     name: 'casita',
  //     price: 356,
  //     image: './assets/images/casa.jpg',
  //   },
  //   {
  //     name: 'cuadros',
  //     price: 34,
  //     image: './assets/images/cuadros.webp',
  //   },
  //   {
  //     name: 'muñeca',
  //     price: 23,
  //     image: './assets/images/doll.jpg',
  //   },
  //   {
  //     name: 'tren',
  //     price: 34,
  //     image: './assets/images/tren.jpg',
  //   },
  // ];

  // person = {
  //   name: 'Jorge',
  //   age: 21,
  //   avantar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
  // };

  // emojis: any[] = ['😂', '🐦', '🐳', '🌮', '💚'];

  // addElement() {
  //   this.emojis.push(this.newName);
  //   this.newName = '';
  // }

  // removeEmoji(index: number) {
  //   this.emojis.splice(index, 1);
  // }

  // toggleButton() {
  //   this.buttonStatus = !this.buttonStatus;
  // }

  // ageIncrease() {
  //   this.person.age++;
  // }

  // onScroll(event: Event) {
  //   const element = event.target as HTMLElement;
  //   console.log(element.scrollTop);
  // }

  // onKeyUp(event: KeyboardEvent) {
  //   const element = event.target as HTMLInputElement;
  //   this.person.name = element.value;
  // }
}
