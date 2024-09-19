import { Component } from '@angular/core';

@Component({
  selector: 'app-factorialcalculator',
  templateUrl: './factorialcalculator.component.html',
  styleUrls: ['./factorialcalculator.component.css']
})
export class FactorialcalculatorComponent {
  inputNumber: number | null = null;
  factorialResult: number | null = null;

  calculateFactorial() {
    if (this.inputNumber !== null && this.inputNumber >= 0) {
      this.factorialResult = this.factorial(this.inputNumber);
    } else {
      this.factorialResult = null;
    }
  }

  factorial(n: number): number {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * this.factorial(n - 1);
  }
}
