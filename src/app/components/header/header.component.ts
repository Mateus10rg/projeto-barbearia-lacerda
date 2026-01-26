import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // --- FUNÇÃO NOVA AQUI ---
  scrollTo(id: string) {
    this.isMenuOpen = false; // 1. Fecha o menu na hora
    
    // 2. Procura a sessão (home, precos, etc) e rola até ela
    const element = document.getElementById(id);
    if (element) {
      // Dá um tempinho minúsculo pro menu fechar antes de rolar
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }
}