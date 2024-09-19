import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicationchecker',
  templateUrl: './multiplicationchecker.component.html',
  styleUrls: ['./multiplicationchecker.component.css']
})
export class MultiplicationcheckerComponent {
  number: number | null = null;
  multipleOf: number | null = null;
  isMultiple: boolean | null = null;

  checkMultiple() {
    if (this.number !== null && this.multipleOf !== null && this.multipleOf !== 0) {
      this.isMultiple = this.number % this.multipleOf === 0;
    } else {
      this.isMultiple = null;
    }
  }
}
