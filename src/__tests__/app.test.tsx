import React from "react";
import { render } from "react-testing-library";
import HelloComponent from "../hello";

test("renders", () => {
  render(<HelloComponent />);
});
