import { Component } from '@angular/core';

@Component({
  selector: 'app-wordshuffler',
  templateUrl: './wordshuffler.component.html',
  styleUrls: ['./wordshuffler.component.css']
})
export class WordshufflerComponent {
  inputWord: string = '';
  shuffledWord: string = '';

  shuffleWord() {
    if (this.inputWord) {
      this.shuffledWord = this.inputWord.split('').sort(() => Math.random() - 0.5).join('');
    } else {
      this.shuffledWord = '';
    }
  }
}
