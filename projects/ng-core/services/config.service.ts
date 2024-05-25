import { Injectable, Inject, Optional } from '@angular/core';
import { CORE_CONFIG, CoreConfig } from '../store';
//import { CORE_CONFIG, CoreConfig } from './store/core-config.token';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private config: CoreConfig;

  constructor(@Optional() @Inject(CORE_CONFIG) config: CoreConfig) {
    if (config) {
      this.config = config;
    } else {
      this.config = { appConfigUrl: '' };
    }
  }

  getConfig(): CoreConfig {
    return this.config;
  }
}
