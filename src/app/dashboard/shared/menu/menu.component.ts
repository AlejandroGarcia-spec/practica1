import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet, Routes } from '@angular/router';
export const routes: Routes= [];
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(private router: Router) {}

  redirectToHome() {
    this.router.navigate(['/dashboard/defer-options']);
  }
  
}
