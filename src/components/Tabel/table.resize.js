import {$} from "@/core/dom";

export const resizeHandle = (event, $root) => {
  const $resizer = $(event.target);
  const $parent = $resizer.closest("[data-type = \"resizable\"]");
  const cords = $parent.getCords();
  const type = $resizer.data.resize;
  const slideProp = type === "col" ? "bottom" : "right";
  const cells = $root.findAll(`[data-col="${$parent.data.col}"]`);
  let value;
  let delta;

  $resizer.css({
    opacity: 1,
    zIndex: 1000,
    [slideProp]: "-100vw",
  });

  document.onmousemove = (event) => {
    if (type === "col") {
      delta = event.pageX - cords.right;
      value = cords.width + delta;
      $resizer.css({
        right: -delta + "px",
      });
    } else {
      delta = event.pageY - cords.bottom;
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
};
