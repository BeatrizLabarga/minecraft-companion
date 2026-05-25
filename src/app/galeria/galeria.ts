import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  standalone: true,
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class Galeria {
  skinSeleccionada = "Steve";

  cambiarSkin(nombre: string) {
    this.skinSeleccionada = nombre;
  }
}