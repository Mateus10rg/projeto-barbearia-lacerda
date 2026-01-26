import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  // Lista organizada
  services = [
    { 
      name: 'Corte de Cabelo', 
      price: 'R$ 35,00', 
      description: 'Do social ao degradê na régua. Acabamento premium.' 
    },
    { 
      name: 'Barba', 
      price: 'R$ 30,00', 
      description: 'Ritual com toalha quente e navalha afiada.' 
    },
    { 
      name: 'Corte Infantil', 
      price: 'R$ 35,00', 
      description: 'Cuidado especial e paciência para os pequenos.' 
    },

    // --- ACABAMENTOS ---
    { 
      name: 'Pezinho', 
      price: 'R$ 15,00', 
      description: 'Manutenção do contorno para o corte durar mais.' 
    },
    { 
      name: 'Sobrancelhas', 
      price: 'R$ 15,00', 
      description: 'Design masculino, limpo e natural.' 
    },

    // --- TRATAMENTO ---
    { 
      name: 'Limpeza de Pele', 
      price: 'R$ 60,00', 
      description: 'Remoção de cravos e impurezas do rosto.' 
    },
    { 
      name: 'Hidratação', 
      price: 'R$ 25,00', 
      description: 'Recuperação dos fios e brilho intenso.' 
    },

    // --- QUÍMICA & ESTILO ---
    { 
      name: 'Alisamento', 
      price: 'R$ 40,00', 
      description: 'Redução de volume com aspecto natural.' 
    },
    { 
      name: 'Progressiva', 
      price: 'R$ 70,00', 
      description: 'Liso perfeito e duradouro.' 
    },
    { 
      name: 'Luzes', 
      price: 'R$ 120,00', 
      description: 'Iluminação moderna para destacar o corte.' 
    },
    { 
      name: 'Nevou (Platinado)', 
      price: 'R$ 180,00', 
      description: 'Descoloração global com proteção aos fios.' 
    }
  ];

  // Lista dos Planos Mensais
plans = [
  {
    name: 'PLANO ESTILO',
    price: 'R$ 120,00',
    frequency: '/mês',
    features: ['Corte Ilimitado'],
    recommended: false
  },
  {
    name: 'PLANO LENHADOR',
    price: 'R$ 170,00',
    frequency: '/mês',
    features: ['Corte Ilimitado', 'Barba Ilimitada'],
    recommended: true // Esse vai ficar destacado
  },
  {
    name: 'PLANO VIP',
    price: 'R$ 190,00',
    frequency: '/mês',
    features: ['Corte Ilimitado', 'Barba Ilimitada', 'Sobrancelha'],
    recommended: false
  },
  {
    name: 'PLANO PRESIDENTE',
    price: 'R$ 220,00',
    frequency: '/mês',
    features: ['Corte', 'Barba', 'Sobrancelha', 'Hidratação'],
    recommended: false
  }
];

  product = [
    { 
      name: 'Pomada Modeladora',
      price: 'R$ 25,00',
      description: 'Fixação forte com acabamento natural.'
    },
    {
      name: 'Perfumes',
      price: 'A partir de R$ 70,00',
      description: 'Variedade de fragrâncias masculinas.'
    },
    { 
      name: 'Shampoo Anticaspa',
      price: 'R$ 30,00 cada',
      description: 'Produtos de alta qualidade para cuidados diários.'
    },
    {
      name: 'Máscara de Hidratação',
      price: 'R$ 35,00 cada',
      description: 'Hidratação profunda para cabelos ressecados.'
    }
  ];
}