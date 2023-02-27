import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-template-style',
  template: `
    <h2 class="custom">
      inline-template-style works!
    </h2>
  `,
  styles: [
    `.custom{
      color:pink
    }`
  ]
})
export class InlineTemplateStyleComponent {

}
