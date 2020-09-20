import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { FeatureService } from './feature.service';
import { FeaturesBrowserComponent } from './features-browser/features-browser.component';
import { FEATURES_ROUTES } from './features.routes';
import './styles.scss';

@NgModule({
  declarations: [FeaturesBrowserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(FEATURES_ROUTES),
    MatCardModule,
    MatButtonModule
  ],
  providers: [
    FeatureService
  ]
})
export class FeaturesModule { }
