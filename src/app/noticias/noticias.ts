import { Component } from '@angular/core';

@Component({
  selector: 'app-noticias',
  standalone: true,
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class Noticias {
  noticias = [
    "Nuevos biomas en la próxima actualización",
    "Evento de construcción en el servidor oficial de Minecraft",
    "Nuevas skins de la comunidad disponibles",
    "¡Minecraft celebra su 17º aniversario con sorpresas!"
  ];
}