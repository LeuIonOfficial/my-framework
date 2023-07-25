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
      const $parent = $resizer.closest("[data-type = \"resizable\"]");
      // eslint-disable-next-line
      debugger;
      const cords = $parent.getCords();
      const cells = this.$root.findAll(`[data-col="${$parent.data.col}"]`);
      document.onmousemove = (event) => {
        console.log(event.pageX);
        const delta = event.pageX - cords.right;
        const value = cords.width + delta;
        $parent.$el.style.width = `${value}px`;
        cells.forEach((element) => {
          element.style.width = `${value}px`;
        });
        console.log(value);
        console.log("data set", $parent.data);
      };
      document.onmouseup = () => {
        document.onmousemove = null;
      };
      console.log("start resizing", $parent);
      console.log(cords);
    }
  }

  toHTML() {
    return createTable();
  }
}
