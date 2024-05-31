import { StateToken } from '@ngxs/store';
import { InjectionToken } from '@angular/core';
import { CoreConfig, IAppGlobalConfig } from 'projects/ng-core/interfaces';

export namespace APP_STATE_TOKEN {
  export const GLOBAL_CONFIG = new StateToken<IAppGlobalConfig>(
    'appGlobalConfigState'
  );
}

export const CORE_CONFIG = new InjectionToken<CoreConfig>('CORE_CONFIG');
