class Dom {
  constructor(selector) {
    this.$el = typeof selector === "string" ?
      document.querySelector(selector) :
      selector;
  }

  html(html) {
    if (typeof html === "string") {
      this.$el.innerHTML = html;
      //   pattern chain
      return this;
    }
    return this.$el.outerHTML.trim();
  }

  clear() {
    this.html("");
    // again pattern chain
    return this;
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$el;
    }
    if (Element.prototype.append) {
      this.$el.append(node);
    } else {
      this.$el.appendChild(node);
    }
    return this;
  }

  on(eventType, callBack) {
    this.$el.addEventListener(eventType, callBack);
  }

  off(eventType, callBack) {
    this.$el.removeEventListener(eventType, callBack);
  }

  closest(selector) {
    return $(this.$el.closest(selector));
  }

  getCords() {
    return this.$el.getBoundingClientRect();
  }

  findAll(selector) {
    return this.$el.querySelectorAll(selector);
  }

  // getter ar fi echivalentul la $.data
  get data() {
    return this.$el.dataset;
  }
}

export const $ = (selector) => {
  return new Dom(selector);
};

// $()
$.create = (tagName, classes = "") => {
  const el = document.createElement(tagName);
  if (classes) {
    el.classList.add(classes);
  }
  return $(el);
};
