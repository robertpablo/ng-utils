export namespace AppStoreActions {
  export namespace GlobalConfig {
    export class SetLoading {
      static readonly type = '[RPBJ-STORE - GLOBAL CONFIG] SetLoading';
      constructor(public payload: { show: boolean }) {}
    }

    export class GetGlobalConfig {
      static readonly type = '[RPBJ-STORE - GLOBAL CONFIG] GetGlobalConfig';
      constructor() {}
    }
  }
}
