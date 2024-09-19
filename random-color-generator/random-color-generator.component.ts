import { Component } from '@angular/core';

@Component({
  selector: 'app-random-color-generator',
  templateUrl: './random-color-generator.component.html',
  styleUrls: ['./random-color-generator.component.css']
})
export class RandomColorGeneratorComponent {
  color: string = '';
  hexCode: string = '';

  generateRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    this.color = `#${randomColor}`;
    this.hexCode = this.color;
  }
}
