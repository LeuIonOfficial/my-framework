import {ExcelComponent} from "@/core/ExcelComponent";
import {createTable} from "@/components/Tabel/table.template";
import {$} from "@/core/dom";

export class Tabel extends ExcelComponent {
  static className = "excel__tabel";

  constructor($root) {
    super($root, {
      name: "table",
      listeners: ["mousedown"],
    });
  }

  onMousedown(event) {
    if (event.target.dataset.resize) {
      const $resizer = $(event.target);
      // const parent = $resizer.$el.parentNode; nu se foloseste
      // const parent = $resizer.$el.closest(".column"); better but bullshit
      const parent = $resizer.closest("[datatype = \"resizable\"]");
      const cords = parent.getCords();
      console.log("start resizing", parent);
      console.log(cords);
    }
  }

  toHTML() {
    return createTable();
  }
}
