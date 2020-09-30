import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Feature } from '../feature.model';
import * as md from 'markdown-it';
import * as MarkdownIt from 'markdown-it';
import { ShellEvents, ShellEventService } from 'md-shell-core';

@Component({
  selector: 'app-feature-detail',
  templateUrl: './feature-detail.component.html',
  // styleUrls: ['./feature-detail.component.scss']
})
export class FeatureDetailComponent implements OnInit {

  name: string;
  feature$: Observable<Feature>;
  markdownHtml: string;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient, private shellEventService: ShellEventService) { }

  ngOnInit() {
    this.feature$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.name = params.get('name');
        console.log(`Fetch feature: ${this.name}`);
        return this.fetchFeatureDetails(this.name);
      }),
      tap(x => {
        const markdown = new MarkdownIt();
        this.markdownHtml = markdown.render(x.description);
      })
    );
  }

  fetchFeatureDetails(name: string): Observable<Feature> {
    return this.httpClient.get<Feature>(environment.apiBaseUrl + 'feature/' + name);
  }

  installFeature(feature: Feature) {
    this.shellEventService.publish(
      {
        source: 'MD.FeaturesBrowser',
        name: ShellEvents.FEATURES_INSTALL,
        data: {
          remoteEntry: feature.remoteUrl,
          remoteName: 'features',
          exposedModule: 'Module',
          displayName: feature.title,
          routePath: 'newfeatures',
          ngModuleName: 'FeaturesModule',
        }
      }
    )
  }
}
