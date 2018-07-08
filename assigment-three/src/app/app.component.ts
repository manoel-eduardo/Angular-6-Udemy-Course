import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toogle = true;
  logs = [];
  index = 1;

  toogleDisplay() {
    this.toogle = !this.toogle;
    this.logs.push(this.index++);
  }

  getDisplay() {
    return this.toogle ? 'block' : 'none';
  }

  getBackgroud(log) {
    console.log(log);
    return log >= 5 ? 'blue' : 'white';
  }
}
