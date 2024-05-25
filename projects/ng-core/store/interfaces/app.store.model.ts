import { IAppGlobalConfig } from './app.store.interface';

export const initialState: { globalConfig: IAppGlobalConfig } = {
  globalConfig: {
    isLoading: false,
    configuration: {
      gateway: {
        bulkload: '',
      },
    },
    error: false,
  },
};
