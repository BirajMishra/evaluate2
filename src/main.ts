import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Evaluate2AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Evaluate2AppComponent);
