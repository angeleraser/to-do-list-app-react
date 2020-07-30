import React from "react";
import ReactDOM from "react-dom";
import ContentWrapper from "./ContentWrapper";
const ROOT = document.getElementById("root");
Storage.prototype.setObject = function (key, value) {
  this.setItem(key, JSON.stringify(value));
};
Storage.prototype.getObject = function (key) {
  const value = this.getItem(key);
  return value && JSON.parse(value);
};
ReactDOM.render(<ContentWrapper />, ROOT);
