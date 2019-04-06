import data from "./data.json";
let template = require("./index.handlebars");
import "./style.css";

data.users.forEach(user => {
  document.body.innerHTML += template(user);
});
