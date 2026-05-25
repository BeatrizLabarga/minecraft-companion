import { Component } from '@angular/core';

@Component({
  selector: 'app-tienda',
  standalone: true,
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class Tienda {
  producto = "Espada de diamante de Minecraft";
  enStock = true;
  likes = 0;

  darLike() {
    this.likes++;
  }
}