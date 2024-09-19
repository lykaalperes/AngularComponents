import { Component } from '@angular/core';

@Component({
  selector: 'app-divisiblechecker',
  templateUrl: './divisiblechecker.component.html',
  styleUrls: ['./divisiblechecker.component.css']
})
export class DivisiblecheckerComponent {
  number1: number | null = null;
  number2: number | null = null;
  isDivisible: boolean | null = null;

  checkDivisibility() {
    if (this.number2 !== 0) {
      this.isDivisible = this.number1 !== null && this.number1 % this.number2! === 0;
    } else {
      this.isDivisible = null;
    }
  }
}
