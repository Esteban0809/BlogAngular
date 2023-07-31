// src/app/components/sidebar/sidebar.component.ts
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    // Obtener todos los enlaces del menú
    const navLinks = document.querySelectorAll('.nav-link') as NodeListOf<HTMLAnchorElement>;

    // Convertir la NodeList a un arreglo y usar forEach
    Array.from(navLinks).forEach((link: HTMLAnchorElement) => {
      if (link.href && link.href === window.location.href) {
        link.classList.add('visited');
      }
    });
  }

}
