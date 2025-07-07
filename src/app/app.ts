import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { EmpleadoPadreComponent } from './empleados/empleado-padre.component';
import { EmpleadoPadre } from './empleados/empleado-padre/empleado-padre';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmpleadoPadre],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Clase02';
}
