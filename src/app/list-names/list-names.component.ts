import { Component, OnInit, OnDestroy } from "@angular/core";
import { AppService } from "../app-service";

@Component({
  selector: "app-list-names",
  template: `
    <div class="box box--alingn-left">
      <h4 class="box__title">Last name is {{ lastName }}</h4>
      <ul class="box__list">
        <li *ngFor="let name of names">{{ name }}</li>
      </ul>
    </div>
  `,
  styles: [],
})

export class ListNamesComponent implements OnInit, OnDestroy {
  lastName: string;
  names: Array<string>;

  constructor(private _service: AppService) {
    this.getNames();
  }

  ngOnInit(): void {
    this._service.EmmitNameChange.subscribe((value: string) => {
      this.lastName = value;
      this.ngOnDestroy();
    });
  }

  ngOnDestroy(): void {}

  getNames() {
    this.names = this._service.getNames();
  }
  
}
