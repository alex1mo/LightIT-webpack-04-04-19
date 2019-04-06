import data from "./data.json";
let template = require("./index.handlebars");

data.users.forEach(user => {
  document.body.innerHTML += template(user);
});
