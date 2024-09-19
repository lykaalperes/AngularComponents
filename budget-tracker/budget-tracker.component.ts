import { Component } from '@angular/core';

interface Transaction {
  description: string;
  amount: number;
  type: 'income' | 'expense';
}

@Component({
  selector: 'app-budget-tracker',
  templateUrl: './budget-tracker.component.html',
  styleUrls: ['./budget-tracker.component.css']
})
export class BudgetTrackerComponent {
  description: string = '';
  amount: number = 0;
  transactions: Transaction[] = [];

  addTransaction(type: 'income' | 'expense') {
    if (this.description.trim() && this.amount > 0) {
      this.transactions.push({ description: this.description.trim(), amount: this.amount, type });
      this.description = '';
      this.amount = 0;
    }
  }

  get totalIncome(): number {
    return this.transactions
      .filter(t => t.type === 'income')
      .reduce((total, t) => total + t.amount, 0);
  }

  get totalExpenses(): number {
    return this.transactions
      .filter(t => t.type === 'expense')
      .reduce((total, t) => total + t.amount, 0);
  }

  get balance(): number {
    return this.totalIncome - this.totalExpenses;
  }
}
