import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { AppModules } from './app/app.module';
import { environment } from './environments/environment';
import { environment as envProd } from './environments/environment.prod';

environment.production = true;
environment.apiBaseUrl = envProd.apiBaseUrl;

enableProdMode();

platformBrowser()
  .bootstrapModule(AppModules)
  .catch(err => console.error(err));
