import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <--- Importante para funcionar o clique

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule], // <--- Adicione aqui
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  isMenuOpen = false; // Começa fechado

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Se tá fechado, abre. Se tá aberto, fecha.
  }

  closeMenu() {
    this.isMenuOpen = false; // Garante que fecha ao clicar num link
  }
}