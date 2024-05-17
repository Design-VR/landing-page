import { ScrollSync } from "./syncscroll";

document.addEventListener("DOMContentLoaded", function () {
  const ss = new ScrollSync({
    disabled: false, // [Boolean] Default value, allow to be empty.
    relative: false, // [Boolean] Default value, allow to be empty.
    doms: document.querySelectorAll(".feature-card .syncscroll"), // [Array] These elements must set scroll attributes.
  });
});
