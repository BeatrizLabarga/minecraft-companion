import { Component } from '@angular/core';
import { Noticias } from './noticias/noticias';
import { Retos } from './retos/retos';
import { Tienda } from './tienda/tienda';
import { Galeria } from './galeria/galeria';  
import { Eventos } from './eventos/eventos';  

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Noticias, 
    Retos, 
    Tienda, 
    Galeria, 
    Eventos  
  ],
  template: `
    <div class="container mt-4">
      <header class="text-center mb-5">
        <h1 class="display-4 text-success">{{ titulo }}</h1>
        <p class="lead">Bienvenido a tu aplicación Companion de Minecraft.</p>
        <p>Minecraft es un videojuego de construcción y exploración donde los jugadores pueden crear mundos ilimitados.</p>
      </header>

      <div class="row g-4">
        <div class="col-12 col-md-6 col-lg-4">
          <app-noticias></app-noticias>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <app-retos></app-retos>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <app-tienda></app-tienda>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <app-galeria></app-galeria>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <app-eventos></app-eventos>
        </div>
      </div>

      <footer class="text-center mt-5 pt-3 border-top">
        <p class="text-muted">Minecraft Companion © 2026</p>
      </footer>
    </div>
  `
})
export class AppComponent {
  titulo = "Minecraft Companion";
}