import "./scss/index.scss";
import {Excel} from "@/components/Excel/Excel";
import {Formula} from "@/components/Formula/Formula";
import {Tabel} from "@/components/Tabel/Tabel";
import {Toolbar} from "@/components/Toolbar/Toolbar";
import {Header} from "@/components/Header/Header";

console.log("something");

const excel = new Excel("#app", {
  components: [Header, Toolbar, Formula, Tabel],
});

excel.render();
console.log(excel);
