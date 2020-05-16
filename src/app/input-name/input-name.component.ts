import { Component, ElementRef, ViewChild } from "@angular/core";
import { AppService } from "../app-service.services";

@Component({
  selector: "app-input-name",
  template: `
    <div class="box">
      <h4>New Name</h4>
      <input
        class="box__input"
        #inputName
        (keyup)="onKey($event)"
        maxlength="20"
      />
      <button class="box__button" (click)="save()">Save</button>
    </div>
  `,
  styles: [],
})
export class InputNameComponent {
  private name: string;
  @ViewChild("inputName") inputName: ElementRef;

  constructor(private _service: AppService) {}

  onKey(event: any) {
    this.name = event.target.value;
  }

  save() {
    this._service.putName(this.name);
    this.inputName.nativeElement.value = "";
  }
}
