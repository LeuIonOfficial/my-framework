import {DOMListeners} from "@/core/DOMListeners";

export class ExcelComponent extends DOMListeners {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name;
  }

  // aceasta metoda va returna un HTML Template
  toHTML() {
    return "";
  }

  init() {
    this.initDOMListeners();
  }

  destroy() {
    this.removeDOMListeners();
  }
}
