import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialProofComponent } from './components/social-proof/social-proof.component';
import { LocationComponent } from './components/location/location.component';
import { WhatsappBtnComponent } from './components/whatsapp-btn/whatsapp-btn.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeroComponent, ServicesComponent, FooterComponent, SocialProofComponent, 
    LocationComponent, WhatsappBtnComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lacerda-front';
}
