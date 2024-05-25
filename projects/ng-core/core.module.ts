import {
  NgModule,
  ModuleWithProviders,
  Optional,
  SkipSelf,
  APP_INITIALIZER,
} from '@angular/core';
import { LoggerModule, NgxLoggerLevel, NGXLogger } from 'ngx-logger';
import { Store } from '@ngxs/store';
import {
  AppStoreActions,
  APP_STATE_TOKEN,
  CoreModuleOptions,
  CoreConfig,
  CORE_CONFIG,
} from './store';

const appInitializerFn = (
  store: Store,
  logger: NGXLogger,
  coreConfig?: CoreConfig
) => {
  return () =>
    new Promise<void>((resolve, reject) => {
      if (coreConfig) {
        store
          .dispatch([new AppStoreActions.GlobalConfig.GetGlobalConfig()])
          .subscribe(
            () => {
              const loggerConfig = logger.getConfigSnapshot();
              console.log(loggerConfig, 'loggerConfig - rpbj');
              const { configuration } = store.selectSnapshot(
                APP_STATE_TOKEN.GLOBAL_CONFIG
              );

              console.log(configuration, 'configuration - rpbj');

              logger.updateConfig({
                ...loggerConfig,
                serverLoggingUrl: `${configuration.gateway.bulkload}/api/v1/log`,
              });

              resolve();
            },
            () => {
              reject();
            }
          );
      } else {
        resolve();
      }
    });
};

@NgModule({
  declarations: [],
  imports: [
    LoggerModule.forRoot({
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR,
    }),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      multi: true,
      deps: [Store, NGXLogger, [new Optional(), CORE_CONFIG]],
    },
  ],
})
export class CoreModule {
  static forRoot(
    config?: CoreConfig,
    options?: CoreModuleOptions
  ): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: CORE_CONFIG, useValue: config },
        { provide: 'CORE_MODULE_OPTIONS', useValue: options },
      ],
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only.'
      );
    }
  }
}
