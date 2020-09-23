import { Routes } from '@angular/router';
import { FeatureDetailComponent } from './feature-detail/feature-detail.component';
import { FeaturesBrowserComponent } from './features-browser/features-browser.component';

export const FEATURES_ROUTES: Routes = [
  {
    path: '',
    component: FeaturesBrowserComponent,
  },
  {
    path: 'details/:id',
    component: FeatureDetailComponent,
  },
];
