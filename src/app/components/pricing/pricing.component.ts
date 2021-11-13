import {Component, OnInit} from '@angular/core';
import {GetPricingService} from "../../services/get-pricing/get-pricing.service";

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  pricing: JSON | undefined;

  constructor(private getPricingService: GetPricingService) {

  }

  ngOnInit(): void {
    this.getPricingService.getPricing().subscribe((p: any) => {
      console.log(p);
      this.pricing = p;
    })
  }

}
