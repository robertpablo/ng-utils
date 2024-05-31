export const eventBus = {
  emit(eventType: string, detail: any) {
    window.dispatchEvent(new CustomEvent(eventType, { detail }));
  },
  on(eventType: string, callback: EventListener) {
    window.addEventListener(eventType, callback);
  },
  off(eventType: string, callback: EventListener) {
    window.removeEventListener(eventType, callback);
  },
};
