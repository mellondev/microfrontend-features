import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeaturesBrowserComponent } from './features-browser/features-browser.component';
import { FEATURES_ROUTES } from './features.routes';



@NgModule({
  declarations: [FeaturesBrowserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(FEATURES_ROUTES)
  ],
})
export class FeaturesModule { }
