import { Component } from '@angular/core';

@Component({
  selector: 'app-fibonaccigenerator',
  templateUrl: './fibonaccigenerator.component.html',
  styleUrls: ['./fibonaccigenerator.component.css']
})
export class FibonaccigeneratorComponent {
  n: number | null = null;
  fibonacciSeries: number[] = [];

  generateFibonacci() {
    if (this.n !== null && this.n > 0) {
      this.fibonacciSeries = [];
      let a = 0, b = 1;
      for (let i = 0; i < this.n; i++) {
        this.fibonacciSeries.push(a);
        [a, b] = [b, a + b];
      }
    } else {
      this.fibonacciSeries = [];
    }
  }
}
