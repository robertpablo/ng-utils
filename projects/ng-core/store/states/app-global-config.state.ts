import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Action, State, StateContext, Store } from '@ngxs/store';
import { AppStoreActions } from '../actions';
import { IAppGlobalConfig, IServerConfig, initialState } from '../interfaces';
import { catchError, tap, throwError } from 'rxjs';
import { CoreConfig } from '../interfaces/core-config';
import { APP_STATE_TOKEN, CORE_CONFIG } from '../tokens';

@State({
  name: APP_STATE_TOKEN.GLOBAL_CONFIG,
  defaults: initialState.globalConfig,
})
@Injectable()
export class AppGlobalConfigState {
  constructor(
    private store: Store,
    private http: HttpClient,
    @Optional() @Inject(CORE_CONFIG) private config?: CoreConfig
  ) {}

  @Action(AppStoreActions.GlobalConfig.SetLoading)
  SetLoading(
    { getState, setState }: StateContext<IAppGlobalConfig>,
    { payload }: AppStoreActions.GlobalConfig.SetLoading
  ) {
    setState({ ...getState(), isLoading: payload.show });
  }

  @Action(AppStoreActions.GlobalConfig.GetGlobalConfig)
  GetGlobalConfig({ getState, setState }: StateContext<IAppGlobalConfig>) {
    if (!this.config) {
      console.error('CORE_CONFIG is not provided');
      return;
    }

    setState({ ...getState(), isLoading: true, error: false });

    return this.http
      .get<IServerConfig>(this.config.appConfigUrl, {
        headers: {
          'Cache-Control': 'no-cache',
        },
      })
      .pipe(
        tap((configuration) => {
          setState({
            ...getState(),
            isLoading: false,
            error: false,
            configuration,
          });
        }),
        catchError((err) => {
          setState({ ...getState(), isLoading: false, error: true });
          console.error(err, 'Ocurrió un error al cargar la configuración');
          return throwError(false);
        })
      );
  }
}
