import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonSpinnerService } from './common-spinner.service';

@Component({
  selector: 'app-common-spinner',
  template: `
    <p-blockUI [blocked]="blocked"></p-blockUI>
  `
})
export class CommonSpinnerComponent implements OnInit, OnDestroy {

  blocked = false;

  spinnerSubscription = new Subscription();

  constructor(private commonSpinner: CommonSpinnerService) { }

  ngOnInit(): void {
    this.spinnerSubscription = this.commonSpinner.showSpinner$.subscribe(showSpinner => this.blocked = showSpinner);
  }

  ngOnDestroy(): void {
    this.spinnerSubscription.unsubscribe();
  }

}
