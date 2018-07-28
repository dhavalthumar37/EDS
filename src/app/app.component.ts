import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'EDS test app';
  constructor() {

  }
}
