import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet, Routes } from '@angular/router';
export const routes: Routes= [];
interface MenuIten{
  titulo: string,
  path: string

}
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  menu: MenuIten[]=[{
    titulo:'control flow',
    path:'control-flow'
  },
 {
    titulo:' defer opcion',
    path:'defer-options'
  },
 {
    titulo:' reactive forms',
    path:'reactive-forms'
  },
 {
    titulo:' examen ',
    path:'exam'
  },
]
  constructor(private router: Router) {}

  redirectToHome() {
    this.router.navigate(['/dashboard/defer-options']);
  }
  
}
