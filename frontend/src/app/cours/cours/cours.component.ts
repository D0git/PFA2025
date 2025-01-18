import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../../accueil/footer/footer.component';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-cours',
  imports: [HeaderComponent,FooterComponent,CardsComponent],
  templateUrl: './cours.component.html',
  styleUrl: './cours.component.css'
})
export class CoursComponent {

}
