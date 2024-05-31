import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { IServerConfig } from '../interfaces';
import { APP_STATE_TOKEN } from '../store';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  constructor(private store: Store) {}

  global = (): IServerConfig => {
    const { configuration } = this.store.selectSnapshot(
      APP_STATE_TOKEN.GLOBAL_CONFIG
    );
    return configuration;
  };
}
