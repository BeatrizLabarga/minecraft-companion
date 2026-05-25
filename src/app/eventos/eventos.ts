import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  standalone: true,
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class Eventos {
  eventos = [
    "Evento construcción sábado",
    "Competición supervivencia",
    "Nueva actualización Minecraft Live"
  ];
  inscrito = false;

  apuntarse() {
    this.inscrito = true;
  }
}