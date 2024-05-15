import { Injectable } from '@angular/core';
import { APP_STATE_TOKEN, IServerConfig } from '../store';
import { Store } from '@ngxs/store';

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
