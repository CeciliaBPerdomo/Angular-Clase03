import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { EmpleadoHijo } from '../empleado-hijo/empleado-hijo';

@Component({
  selector: 'app-empleado-padre',
  imports: [NgFor, EmpleadoHijo],
  templateUrl: './empleado-padre.html',
  styleUrl: './empleado-padre.css'
})

export class EmpleadoPadre {
 empleados = [
    { id: 1, nombre: 'Ana', apellido: "Gomez", puesto: 'Desarrolladora' },
    { id: 2, nombre: 'Luis', apellido: "Perez", puesto: 'Diseñador UX' },
    { id: 3, nombre: 'Carlos', apellido: "Gonzalez", puesto: 'Tester QA' }
  ];

  actualizarEmpleadoActualizado(empleadoActualizado: any) {
    const index = this.empleados.findIndex(e => e.id === empleadoActualizado.id);
    if (index !== -1) {
      this.empleados[index] = empleadoActualizado;
    }
  }
}
