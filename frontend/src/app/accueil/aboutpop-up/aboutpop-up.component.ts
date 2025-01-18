import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-aboutpop-up',
  imports: [
      MatDialogModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      FormsModule,
      ReactiveFormsModule,
      CommonModule
    ],
  templateUrl: './aboutpop-up.component.html',
  styleUrl: './aboutpop-up.component.css'
})
export class AboutpopUpComponent {

}
