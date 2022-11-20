import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CommonSpinnerService {

  showSpinner$ = new Subject<boolean>();

  constructor() { }

  showSpinner() {
    this.showSpinner$.next(true);
  }

  hideSpinner() {
    this.showSpinner$.next(false);
  }

}