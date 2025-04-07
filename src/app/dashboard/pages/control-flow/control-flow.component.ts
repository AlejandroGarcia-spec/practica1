import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ToMinutesPipe } from '../../../pipes/to-minutes.pipe';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [ToMinutesPipe],
  templateUrl: './control-flow.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ControlFlowComponent { 
  segundos=[1500,2300,4200,520]
  verMesage=false;
  isAdmin=false;
  name="alejandro";
  grade=9;
  animes=['naruto','dbz','zombilad','bleach','ttgl','ranma'];
  frutas=['mango','limon','nuez','manzana','tamarindo ','melon'];
  artist=[];
  showMesaje(){
    this.verMesage=!this.verMesage;
  }
}
