import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dev = {
    name: 'Hello',
    age: 0,
    gender: 'MALE',
    js: true,
    java: true,
    go: '',
    status: 'SIN'
  };

  show() : void {
    console.log(this.dev);
  }
}
