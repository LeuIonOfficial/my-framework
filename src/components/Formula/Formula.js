import {ExcelComponent} from "@/core/ExcelComponent";

export class Formula extends ExcelComponent {
  constructor($root) {
    super($root, {
      name: "formula",
      listeners: ["input", "click"],
    });
  }

  onInput(event) {
    console.log("formula event", event);
  }

  static className = "excel__formula"

  onClick(event) {
    console.log("am apasat", event);
  }

  toHTML() {
    return `
        <div class="info">
            FX
        </div>
        <div class="input" contenteditable="true" spellcheck="false"></div>
    `;
  }
}
