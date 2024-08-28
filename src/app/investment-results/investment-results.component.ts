import { CurrencyPipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { investmentService } from '../../user.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  private investmentService = inject(investmentService);

  get results(){
    return this.investmentService.resultsData;
  }


}
