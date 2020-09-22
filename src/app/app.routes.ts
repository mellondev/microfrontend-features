import { Routes } from '@angular/router';
import { AddFeatureComponent } from './add-feature/add-feature.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'features',
    pathMatch: 'full',
  },
  {
    path: 'features',
    loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule),
  },
  {
    path: 'addfeature',
    component: AddFeatureComponent
  }
];
