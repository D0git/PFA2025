import { Component } from '@angular/core';
import { FooterComponent } from '../../../accueil/footer/footer.component';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-ecologie',
  imports: [FooterComponent,HeaderComponent],
  templateUrl: './ecologie.component.html',
  styleUrl: './ecologie.component.css'
})
export class EcologieComponent {

}
