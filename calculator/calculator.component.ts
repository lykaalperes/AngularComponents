import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  num1: number | null = null;
  num2: number | null = null;
  result: number | null = null;
  operation: string = '';

  calculate() {
    if (this.num1 !== null && this.num2 !== null) {
      switch (this.operation) {
        case 'add':
          this.result = this.num1 + this.num2;
          break;
        case 'subtract':
          this.result = this.num1 - this.num2;
          break;
        case 'multiply':
          this.result = this.num1 * this.num2;
          break;
        case 'divide':
          this.result = this.num2 !== 0 ? this.num1 / this.num2 : null;
          break;
        default:
          this.result = null;
      }
    } else {
      this.result = null;
    }
  }
}
