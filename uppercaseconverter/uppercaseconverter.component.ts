import { Component } from '@angular/core';

@Component({
  selector: 'app-uppercaseconverter',
  templateUrl: './uppercaseconverter.component.html',
  styleUrls: ['./uppercaseconverter.component.css']
})
export class UppercaseconverterComponent {
  inputText: string = '';
  uppercaseText: string = '';

  convertToUppercase() {
    this.uppercaseText = this.inputText.toUpperCase();
  }
}
