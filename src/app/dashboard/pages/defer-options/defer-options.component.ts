import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-defer-options',
  standalone: true,
  imports: [],
  templateUrl: './defer-options.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DeferOptionsComponent { }
