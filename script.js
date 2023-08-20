"use strict";
const time = document.querySelector(".time");
setInterval(
  () =>
    (time.textContent = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    }).format(new Date())),
  1000
);
