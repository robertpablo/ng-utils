import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Action, StateContext, Store } from '@ngxs/store';
import { AppStoreActions } from '../actions';
import { IAppGlobalConfig, IServerConfig } from '../interfaces';
import { catchError, tap, throwError } from 'rxjs';
import { CoreConfig } from '../interfaces/core-config';
import { CORE_CONFIG } from '../tokens';

@Injectable()
export class AppGlobalConfigState {
  constructor(
    private store: Store,
    private http: HttpClient,
    @Inject(CORE_CONFIG) private config: CoreConfig
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
