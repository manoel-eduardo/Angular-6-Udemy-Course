import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: 'warning-alert.component.html'
})
export class WarningAlertComponent {
  message = 'This is a warning alert—check it out!';
  
  constructor() { }
}
