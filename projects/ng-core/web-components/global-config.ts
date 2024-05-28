class GlobalConfig extends HTMLElement {
  private config: any = {};

  constructor() {
    super();
  }

  connectedCallback() {
    window.addEventListener(
      'updateGlobalConfig',
      this.updateConfig.bind(this) as EventListener
    );
  }

  disconnectedCallback() {
    window.removeEventListener(
      'updateGlobalConfig',
      this.updateConfig.bind(this) as EventListener
    );
  }

  updateConfig(event: CustomEvent) {
    this.config = event.detail;
    this.dispatchEvent(
      new CustomEvent('configUpdated', { detail: this.config })
    );
  }

  setConfig(config: any) {
    this.config = config;
    window.dispatchEvent(
      new CustomEvent('updateGlobalConfig', { detail: config })
    );
  }

  getConfig() {
    return this.config;
  }
}

if (!customElements.get('global-config')) {
  window.customElements.define('global-config', GlobalConfig);
}

export { GlobalConfig };
