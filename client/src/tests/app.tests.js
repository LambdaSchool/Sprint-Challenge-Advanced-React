import React from "react";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import App from "../App";

it("renders app", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});
