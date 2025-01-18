import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboardadmin',
  imports: [HeaderComponent,SidebarComponent,RouterOutlet,CommonModule],
  templateUrl: './dashboardadmin.component.html',
  styleUrl: './dashboardadmin.component.css'
})
export class DashboardadminComponent {

}
