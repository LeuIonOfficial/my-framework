import {ExcelComponent} from "@/core/ExcelComponent";

export class Header extends ExcelComponent {
  constructor($root) {
    super($root, {
      listeners: [],
      name: "header",
    });
  }

  static className = "excel__header";

  toHTML() {
    return `
    <input type="text" class="input" placeholder="file name">
        <div class="icons">
            <div class="button">
                    <span class="material-icons">
                    description
                    </span>
            </div>
            <div class="button">
                    <span class="material-icons">
                    delete
                    </span>
            </div>
        </div>
    `;
  }
}
