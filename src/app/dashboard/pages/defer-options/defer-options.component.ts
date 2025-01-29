import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from '../../../card/card/card.component';

@Component({
  selector: 'app-defer-options',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './defer-options.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DeferOptionsComponent { }
