import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { AppModules } from './app/app.module';
import { environment } from './environments/environment';

environment.production = true;
enableProdMode();

platformBrowser()
  .bootstrapModule(AppModules)
  .catch(err => console.error(err));
