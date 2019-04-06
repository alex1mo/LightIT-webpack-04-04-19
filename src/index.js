import _ from "lodash";
let template = require("./index.pug");

function component() {
  let element = document.createElement("div");
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  return element;
}

let html = template();

console.log(html);

document.body.innerHTML = html;
document.body.appendChild(component());
