import { Component } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public style: object = {};

  validate(event: ResizeEvent): boolean {
    console.log(event);
    const MIN_DIMENSIONS_PX = 50;
    if (
      event.rectangle.width &&
      event.rectangle.height &&
      (event.rectangle.width < MIN_DIMENSIONS_PX ||
        event.rectangle.height < MIN_DIMENSIONS_PX)
    ) {
      return false;
    }
    return true;
  }

  onResizeEnd(event: ResizeEvent): void {
    this.style = {
      left: event.rectangle.left + 'px',
      top: event.rectangle.top + 'px',
      width: event.rectangle.width + 'px',
      height: event.rectangle.height + 'px'
    };
    console.log(this.style);
  }
}
