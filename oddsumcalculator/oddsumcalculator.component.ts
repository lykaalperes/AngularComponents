import { Component } from '@angular/core';

@Component({
  selector: 'app-oddsumcalculator',
  templateUrl: './oddsumcalculator.component.html',
  styleUrls: ['./oddsumcalculator.component.css']
})
export class OddsumcalculatorComponent {
  number: number | null = null;
  oddSum: number | null = null;

  calculateOddSum() {
    if (this.number !== null && this.number >= 0) {
      this.oddSum = 0;
      for (let i = 1; i <= this.number; i += 2) {
        this.oddSum += i;
      }
    } else {
      this.oddSum = null;
    }
  }
}
