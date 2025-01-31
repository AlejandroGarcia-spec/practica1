import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [],
  templateUrl: './reactiveForms.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ReactiveFormsComponent { }
