import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-empleado-hijo',
  imports: [FormsModule, NgIf],
  templateUrl: './empleado-hijo.html',
  styleUrl: './empleado-hijo.css'
})

export class EmpleadoHijo {
  @Input() empleado: any;
  @Output() empleadoEditado = new EventEmitter<any>();

  editando = false;
  nombreEditado: string = '';
  apellidoEditado: string = '';
  puestoEditado: string = '';

  editar() {
    this.editando = true;
    this.nombreEditado = this.empleado.nombre;
    this.apellidoEditado = this.empleado.apellido;
    this.puestoEditado = this.empleado.puesto;
  }

  guardar() {
    this.editando = false;
    this.empleadoEditado.emit({
      ...this.empleado,
      nombre: this.nombreEditado,
      apellido: this.apellidoEditado, 
      puesto: this.puestoEditado
    });
  }

}
