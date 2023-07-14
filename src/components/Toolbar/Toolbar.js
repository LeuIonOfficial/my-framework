import {ExcelComponent} from "@/core/ExcelComponent";

export class Toolbar extends ExcelComponent {
  constructor($root) {
    super($root, {
      name: "toolbar",
      listeners: ["click"],
    });
  }
  static className = "excel__toolbar";

  onClick(event) {
    console.log("Tipa am apasat", event.target);
  }

  toHTML() {
    return `
        <div class="button">
                <span class="material-icons">
                    format_align_left
                </span>
        </div>
        <div class="button">
                <span class="material-icons">
                    format_align_center
                </span>
        </div>
        <div class="button">
                <span class="material-icons">
                    format_align_right
                </span>
        </div>
        <div class="button">
                <span class="material-icons">
                    format_align_justify
                </span>
        </div>
        <div class="button">
                <span class="material-icons">
                    format_underlined
                </span>
        </div>
        <div class="button">
                <span class="material-icons">
                    format_bold
                </span>
        </div>
        <div class="button">
                <span class="material-icons">
                    format_italic
                </span>
        </div>
    `;
  }
}
