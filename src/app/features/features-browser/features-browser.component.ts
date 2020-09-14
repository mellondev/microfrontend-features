import { Component, OnInit } from '@angular/core';
import { Feature } from './feature.model';

@Component({
  selector: 'app-feature-browser',
  templateUrl: './features-browser.component.html',
  // styleUrls: ['./features-browser.component.scss']
})
export class FeaturesBrowserComponent implements OnInit {

  features: Feature[] = [
    { name: 'Booking Wizard', description: 'Adding booking wizard to your app', iconUrl: ''},
    { name: 'Capacity', description: 'Manage your resources capacity', iconUrl: ''},
    { name: 'Optimisation', description: 'Optimise your resources diary with advance route optimisation and instruction distribution', iconUrl: ''},
    { name: 'Priority Booking', description: 'Add priority booking to enable next job booking feature', iconUrl: ''},
    { name: 'Auto Assignment', description: 'Automaticcaly assign new job to the appropriate resources', iconUrl: ''},
    { name: 'Data Factory', description: 'Need to import jobs automatically then Data Factory is for you.  Configure you incoming job streams and mappings', iconUrl: ''}
  ];
  constructor() { }

  ngOnInit() {
  }

}
