import { Component } from '@angular/core';

@Component({
  selector: 'app-compoundinterestcalculator',
  templateUrl: './compoundinterestcalculator.component.html',
  styleUrls: ['./compoundinterestcalculator.component.css']
})
export class CompoundinterestcalculatorComponent {
  principal: number | null = null;
  rate: number | null = null;
  time: number | null = null;
  frequency: number | null = null;
  compoundInterest: number | null = null;

  calculateCompoundInterest() {
    if (this.principal !== null && this.rate !== null && this.time !== null && this.frequency !== null) {
      const r = this.rate / 100;
      const amount = this.principal * Math.pow(1 + r / this.frequency, this.frequency * this.time);
      this.compoundInterest = amount - this.principal;
    } else {
      this.compoundInterest = null;
    }
  }
}
