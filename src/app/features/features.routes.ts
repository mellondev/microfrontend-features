import { Routes } from '@angular/router';
import { FeaturesBrowserComponent } from './features-browser/features-browser.component';


export const FEATURES_ROUTES: Routes = [
    {
      path: '',
      redirectTo: 'features-browser'
    },
    {
      path: 'features-browser',
      component: FeaturesBrowserComponent
    }
];