import { Component } from '@angular/core';
import { environment   } from '../../../environments/environment';
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css'],
})
export class PricingComponent {
  
  pricingTerm = 1;
  appURL = environment.app_url;

}
