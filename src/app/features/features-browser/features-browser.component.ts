import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Feature } from '../feature.model';
import { FeatureService } from '../feature.service';


@Component({
  selector: 'app-feature-browser',
  templateUrl: './features-browser.component.html',
  // styleUrls: ['./features-browser.component.scss']
})
export class FeaturesBrowserComponent implements OnInit {
  features$: Observable<Feature[]>;

  constructor(private featureService: FeatureService) {}

  ngOnInit() {
    this.features$ = this.featureService.getFeatures();
  }

}
