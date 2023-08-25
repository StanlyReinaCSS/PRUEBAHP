import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: boolean = false;
  title = 'hp-proyecto';

  constructor(private router: Router) {}
  ngOnInit() {
    // Verifica si hay un token en el localStorage
    this.isLoggedIn = !!localStorage.getItem('token');
  }
  logout() {
    // Elimina el token del localStorage y redirige a la página de inicio de sesión
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
