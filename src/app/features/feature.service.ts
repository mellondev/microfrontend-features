import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Feature } from './feature.model';

@Injectable({
  providedIn: 'root',
})
export class FeatureService {
  constructor(private httpClient: HttpClient) {}

  getFeatures(): Observable<Feature[]> {
    return this.httpClient.get<Feature[]>(environment.apiBaseUrl + 'features');
  }
}
