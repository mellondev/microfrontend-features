import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { FeatureService } from './feature.service';
import { FeaturesBrowserComponent } from './features-browser/features-browser.component';
import { FEATURES_ROUTES } from './features.routes';
import './styles.scss';
import { FeatureDetailComponent } from './feature-detail/feature-detail.component';

@NgModule({
  declarations: [FeaturesBrowserComponent, FeatureDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(FEATURES_ROUTES),
    HttpClientModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [
    FeatureService
  ]
})
export class FeaturesModule { }
