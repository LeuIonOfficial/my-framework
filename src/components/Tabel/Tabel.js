import {ExcelComponent} from "@/core/ExcelComponent";
import {createTable} from "@/components/Tabel/table.template";

export class Tabel extends ExcelComponent {
  static className = "excel__tabel";
  toHTML() {
    return createTable();
  }
}
