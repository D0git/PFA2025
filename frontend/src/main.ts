// filepath: /c:/Users/LENOVO/IdeaProjects/project_javaee/projet-multiplateforme-e2425g4_5/service_sante/src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http'; // Import provideHttpClient and withFetch
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideHttpClient(withFetch()) // Enable fetch for HttpClientModule
  ]
}).catch((err) => console.error(err));