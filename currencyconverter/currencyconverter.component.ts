import { Component } from '@angular/core';

@Component({
  selector: 'app-currencyconverter',
  templateUrl: './currencyconverter.component.html',
  styleUrls: ['./currencyconverter.component.css']
})
export class CurrencyconverterComponent {
  amountUSD: number | null = null;
  amountPHP: number | null = null;

  convertToPHP() {
    const conversionRate = 56;
    if (this.amountUSD !== null) {
      this.amountPHP = this.amountUSD * conversionRate;
    } else {
      this.amountPHP = null;
    }
  }
}
