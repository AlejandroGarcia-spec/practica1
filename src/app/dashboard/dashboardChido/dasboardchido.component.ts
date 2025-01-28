import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from '../shared/menu/menu.component';

@Component({
  selector: 'app-dasboardchido',
  standalone: true,
  imports: [RouterOutlet,MenuComponent],
  templateUrl: './dasboardchido.component.html',
})
export default class DasboardchidoComponent { }
