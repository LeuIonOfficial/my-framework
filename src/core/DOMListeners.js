import {capitalize} from "@/core/utils";

const getMethodName = (eventName) => {
  return "on" + capitalize(eventName);
};

export class DOMListeners {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error("No $root provided for DOM Listener");
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);
      if (!this[method]) {
        const name = this.name || "";
        throw new Error(`Method ${method} is not implemented in 
        ${name} component`);
      }
      this[method] = this[method].bind(this);
      this.$root.on(listener, this[method]);
    });
  }

  removeDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);
      this.$root.off(listener, this[method].bind(this));
    });
  }
}
