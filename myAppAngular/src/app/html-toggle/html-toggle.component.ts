import { Component } from '@angular/core';

@Component({
  selector: 'app-html-toggle',
  templateUrl: './html-toggle.component.html',
  styleUrls: ['./html-toggle.component.css']
})
export class HtmlToggleComponent {
  displayShow = true;
  toggle() {
    this.displayShow = !this.displayShow;
  }
}
