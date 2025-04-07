import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ToColorPipe } from '../../../pipes/to-color.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ToColorPipe,CommonModule],
  templateUrl: './products.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProductsComponent {
  price=[90,550,1200,10]
 }
