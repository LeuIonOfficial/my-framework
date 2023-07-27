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
      const $parent = $resizer.closest("[data-type = \"resizable\"]");
      const cords = $parent.getCords();
      const type = $resizer.data.resize;
      const slideProp = type === "col" ? "bottom" : "right";
      const cells = this.$root.findAll(`[data-col="${$parent.data.col}"]`);
      let value;

      $resizer.css({
        opacity: 1,
        zIndex: 1000,
        [slideProp]: "-2000px",
      });

      document.onmousemove = (event) => {
        if (type === "col") {
          const delta = event.pageX - cords.right;
          value = cords.width + delta;
          $resizer.css({
            right: -delta + "px",
          });
        } else {
          const delta = event.pageY - cords.bottom;
          value = cords.height + delta;
          $resizer.css({
            bottom: -delta + "px",
          });
        }
      };
      document.onmouseup = () => {
        if (type === "col") {
          cells.forEach((element) => {
            element.style.width = `${value}px`;
          });
          $parent.css({width: `${value}px`});
        } else {
          $parent.css({height: value + "px"});
        }
        $resizer.css({
          opacity: 0,
          bottom: 0,
          right: 0,
        });

        document.onmousemove = null;
        document.onmouseup = null;
      };
    }
  }

  toHTML() {
    return createTable();
  }
}
