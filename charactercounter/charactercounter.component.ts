import { Component } from '@angular/core';

@Component({
  selector: 'app-charactercounter',
  templateUrl: './charactercounter.component.html',
  styleUrls: ['./charactercounter.component.css']
})
export class CharactercounterComponent {
  inputText: string = '';
  characterCount: number = 0;

  countCharacters() {
    this.characterCount = this.inputText.length;
  }
}
