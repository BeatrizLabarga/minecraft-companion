import { Component } from '@angular/core';

@Component({
  selector: 'app-retos',
  standalone: true,
  templateUrl: './retos.component.html',
  styleUrls: ['./retos.component.css']
})
export class Retos {
  reto = "Construye un castillo de piedra en modo supervivencia.";
  completado = false;

  completarReto() {
    this.completado = true;
  }
}