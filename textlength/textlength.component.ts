import { Component } from '@angular/core';

@Component({
  selector: 'app-textlength',
  templateUrl: './textlength.component.html',
  styleUrls: ['./textlength.component.css']
})
export class TextlengthComponent {
  inputText: string = '';
  textLength: number | null = null;

  calculateLength() {
    this.textLength = this.inputText.length;
  }
}
