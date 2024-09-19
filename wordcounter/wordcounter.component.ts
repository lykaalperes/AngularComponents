import { Component } from '@angular/core';

@Component({
  selector: 'app-wordcounter',
  templateUrl: './wordcounter.component.html',
  styleUrls: ['./wordcounter.component.css']
})
export class WordcounterComponent {
  inputText: string = '';
  wordCount: number = 0;

  countWords() {
    if (this.inputText.trim()) {
      this.wordCount = this.inputText.trim().split(/\s+/).filter(word => word.length > 0).length;
    } else {
      this.wordCount = 0;
    }
  }
}
