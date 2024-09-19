import { Component } from '@angular/core';

@Component({
  selector: 'app-currencyformatter',
  templateUrl: './currencyformatter.component.html',
  styleUrls: ['./currencyformatter.component.css']
})
export class CurrencyformatterComponent {
  amount: number | null = null;
  formattedCurrency: string | null = null;

  formatCurrency(currencyType: string) {
    if (this.amount !== null) {
      switch (currencyType) {
        case 'USD':
          this.formattedCurrency = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(this.amount);
          break;
        case 'PHP':
          this.formattedCurrency = new Intl.NumberFormat('en-PH', {
            style: 'currency',
            currency: 'PHP'
          }).format(this.amount);
          break;
        case 'EUR':
          this.formattedCurrency = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
          }).format(this.amount);
          break;
        default:
          this.formattedCurrency = null;
      }
    } else {
      this.formattedCurrency = null;
    }
  }
}
