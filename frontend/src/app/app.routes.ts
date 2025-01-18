import { ChildActivationEnd, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { DashboardadminComponent } from './admin/dashboardadmin/dashboardadmin.component';
import { AccueilComponent } from './accueil/accueil/accueil.component';
import { CoursComponent } from './cours/cours/cours.component';
import { AboutComponent } from './accueil/about/about.component';
import { ContactusComponent } from './accueil/contactus/contactus.component';
import { BiologieComponent } from './cours/listeCours/biologie/biologie.component';
import { GeologieComponent } from './cours/listeCours/geologie/geologie.component';
import { EcologieComponent } from './cours/listeCours/ecologie/ecologie.component';




export const routes: Routes = [

    /*{
        path:'',
        redirectTo: 'login',
        pathMatch:'full',
    },
    {   path: 'login', 
        component: LoginComponent 
    },
    {   path: 'register', 
        component: RegisterComponent 
    },
*/
    {
    path: '',
    component: AccueilComponent, 
    },
    {
        path: 'courses',
        component: CoursComponent,
    },
    {
        path: 'biologie',
        component : BiologieComponent
    },
    {
        path: 'geologie',
        component : GeologieComponent
    },
    {
        path: 'ecologie',
        component : EcologieComponent
    },
        
    {
        path: 'dashboard',
        component: DashboardadminComponent,
        
    },
   
   
    {
        path: 'unauthorized',
        component: UnauthorizedComponent, // Redirect to UnauthorizedComponent
    },


];
