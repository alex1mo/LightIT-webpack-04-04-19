import _ from "lodash";
var template = require("pug-loader!./index.pug");

function component() {
  let element = document.createElement("div");
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  return element;
}

var html = template();

document.body.innerHTML = html;
document.body.appendChild(component());
