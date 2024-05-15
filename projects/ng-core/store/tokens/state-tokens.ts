import { StateToken } from '@ngxs/store';
import { IAppGlobalConfig } from '../interfaces';
import { InjectionToken } from '@angular/core';
import { CoreConfig } from '../interfaces/core-config';

export namespace APP_STATE_TOKEN {
  export const GLOBAL_CONFIG = new StateToken<IAppGlobalConfig>(
    'appGlobalConfigState'
  );
}

export const CORE_CONFIG = new InjectionToken<CoreConfig>('CORE_CONFIG');
