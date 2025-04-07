import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipes.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export default class PipesComponent {
  today = new Date(); 
  
  anime = {
    nombre: 'deat note ',
    tipo: ['drama','policial'],
 año: 2002
  };
 }
