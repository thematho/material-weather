import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { AboutComponent } from './about/components/about/about.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full',
}, {
  path: 'home',
  component: HomeComponent
}, {
  path: 'about',
  component: AboutComponent
}];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
