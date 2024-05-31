import { IAppGlobalConfig } from 'projects/ng-core/interfaces';

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
