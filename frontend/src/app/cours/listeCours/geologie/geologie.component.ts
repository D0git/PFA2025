import { Component } from '@angular/core';
import { FooterComponent } from '../../../accueil/footer/footer.component';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-geologie',
  imports: [FooterComponent,HeaderComponent],
  templateUrl: './geologie.component.html',
  styleUrl: './geologie.component.css'
})
export class GeologieComponent {

}
