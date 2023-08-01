import {ExcelComponent} from "@/core/ExcelComponent";
import {createTable} from "@/components/Tabel/table.template";
import {resizeHandle} from "@/components/Tabel/table.resize";
import {TableSelection} from "@/components/Tabel/TableSelection";

export class Tabel extends ExcelComponent {
  static className = "excel__tabel";

  constructor($root) {
    super($root, {
      name: "table",
      listeners: ["mousedown"],
    });
    console.log("Constructor");
  }

  toHTML() {
    console.log("toHTML");
    return createTable();
  }

  init() {
    super.init();
    console.log("init");
    this.selection = new TableSelection();
  }

  onMousedown(event) {
    if (event.target.dataset.resize) {
      resizeHandle(event, this.$root);
    }
  }
}
