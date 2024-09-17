import "./ts/common";
import "./css/main.css";
import "./scss/main.scss";

import Vue from "vue";

import _ from "lodash";

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());
