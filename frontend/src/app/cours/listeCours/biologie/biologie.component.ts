import { Component } from '@angular/core';
import { FooterComponent } from '../../../accueil/footer/footer.component';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-biologie',
  imports: [FooterComponent,HeaderComponent],
  templateUrl: './biologie.component.html',
  styleUrl: './biologie.component.css'
})
export class BiologieComponent {

}
