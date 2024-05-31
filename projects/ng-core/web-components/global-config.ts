import { eventBus } from '../event-bus';

class GlobalConfig extends HTMLElement {
  private config: any = {};

  constructor() {
    super();
  }

  connectedCallback() {
    eventBus.on(
      'updateGlobalConfig',
      this.updateConfig.bind(this) as EventListener
    );
  }

  disconnectedCallback() {
    eventBus.off(
      'updateGlobalConfig',
      this.updateConfig.bind(this) as EventListener
    );
  }

  updateConfig(event: CustomEvent) {
    this.config = event.detail;
    eventBus.emit('configUpdated', this.config);
  }

  setConfig(config: any) {
    this.config = config;
    eventBus.emit('updateGlobalConfig', config);
  }

  getConfig() {
    return this.config;
  }
}

if (!customElements.get('global-config')) {
  window.customElements.define('global-config', GlobalConfig);
}

export { GlobalConfig };
