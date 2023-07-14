import {$} from "@/core/dom";

export class Excel {
  constructor(selector, options) {
    this.$el = $(selector);
    this.components = options.components || [];
  }

  // const header = new Header();
  // const formula = new Formula();
  // const tabel = new Tabel();
  // const toolbar = new Toolbar();

  getRoot() {
    // const $root = document.createElement("div");
    // $root.classList.add("excel");
    const $root = $.create("div", "excel");
    this.components = this.components.map((Component) => {
      // const $el = document.createElement("div");
      // $el.classList.add(Component.className);
      const $el = $.create("div", Component.className);
      const component = new Component($el);
      if (component.name) {
        window["c"+component.name] = component;
      }
      // console.log("element", component);
      // eslint-disable-next-line
      // $el.innerHTML = component.toHTML();
      $el.html(component.toHTML());
      $root.append($el);
      // $root.insertAdjacentHTML("beforeend", component.toHTML());
      return component;
    });
    return $root;
  }

  render() {
    // this.$el.insertAdjacentHTML("afterbegin", "<h1>I will be the best</h1>");
    // const title = document.createElement("h1");
    // title.textContent = "I will be the best!";
    // document.body.append(title);
    // console.log("components", this.components);
    this.$el.append(this.getRoot());
    this.components.forEach((component) => {
      component.init();
    });
  }
}
