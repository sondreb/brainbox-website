import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app/app.component';
import { AppsComponent } from './apps/apps.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'apps', component: AppsComponent },
  { path: 'apps/:id', component: AppComponent },
  { path: 'about', component: AboutComponent },
];
