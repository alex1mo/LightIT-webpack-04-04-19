import _ from "lodash";
import "./style.css";
let template = require("./index.pug");

function component() {
  let element = document.createElement("div");
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  return element;
}

let html = template();

document.body.innerHTML = html;
document.body.appendChild(component());
