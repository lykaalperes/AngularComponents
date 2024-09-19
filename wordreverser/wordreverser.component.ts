import { Component } from '@angular/core';

@Component({
  selector: 'app-wordreverser',
  templateUrl: './wordreverser.component.html',
  styleUrls: ['./wordreverser.component.css']
})
export class WordreverserComponent {
  inputWord: string = '';
  reversedWord: string = '';

  reverseWord() {
    this.reversedWord = this.inputWord.split('').reverse().join('');
  }
}
