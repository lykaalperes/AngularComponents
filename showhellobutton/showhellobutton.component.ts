import { Component } from '@angular/core';

@Component({
  selector: 'app-showhellobutton',
  templateUrl: './showhellobutton.component.html',
  styleUrls: ['./showhellobutton.component.css']
})
export class ShowhellobuttonComponent {
  message: string | null = null;

  showMessage() {
    this.message = 'Hello World';
  }
}
