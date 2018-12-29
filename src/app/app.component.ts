import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /**
   * Click logger
   *
   */
  log(event: MouseEvent) {
    console.log(event);
  }
}
