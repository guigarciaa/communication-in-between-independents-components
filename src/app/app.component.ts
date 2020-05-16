import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <h1 class="title">{{ title }}</h1>
    <section class="container">
      <app-input-name></app-input-name>
      <app-list-names></app-list-names>
    </section>
  `,
  styles: []
})
export class AppComponent {
  title = "Communication in Between Independents Components";
}
