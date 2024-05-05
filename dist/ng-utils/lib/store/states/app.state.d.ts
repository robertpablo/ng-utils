import { StateContext } from '@ngxs/store';
import { SetLoading, SetTitle } from '../actions/app.actions';
export interface AppStateModel {
    loading: boolean;
    title: string;
}
export declare class AppState {
    static isLoading(state: AppStateModel): boolean;
    static title(state: AppStateModel): string;
    setLoading(ctx: StateContext<AppStateModel>, action: SetLoading): void;
    setTitle(ctx: StateContext<AppStateModel>, action: SetTitle): void;
}
