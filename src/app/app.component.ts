import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  // template : `

  // <ng-template [ngTemplateOutlet]="outlet" [ngOutletContext]="context"></ng-template>


  // `

})
export class AppComponent {
  title : string = 'my-store';
  buttonStatus : boolean = true;
  newName: any = '';

  person = {
    name: 'Jorge',
    age: 21,
    avantar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
  }

  emojis : any[] = [ '😂' , '🐦', '🐳','🌮', '💚'];

  addElement() {
    this.emojis.push(this.newName);
    this.newName = '';
  }

  removeEmoji(index : number) {
    this.emojis.splice(index, 1);
  }


  toggleButton() {
    this.buttonStatus = !this.buttonStatus;
  }

  ageIncrease() {
    this.person.age++;
  }

  onScroll(event : Event) {
   const element = event.target as HTMLElement;
   console.log(element.scrollTop);
  }

  onKeyUp(event : KeyboardEvent) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

}

