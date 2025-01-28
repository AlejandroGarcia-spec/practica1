import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ControlFlowComponent { 
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
