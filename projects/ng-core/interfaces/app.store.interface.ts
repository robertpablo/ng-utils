export interface IServerGatewayConfig {
  bulkload: string;
}

export interface IServerConfig {
  gateway: IServerGatewayConfig;
}

export interface IAppGlobalConfig {
  isLoading: boolean;
  configuration: IServerConfig;
  error: boolean;
}
