import React from "react";
import { render, cleanup } from "react-testing-library";
import HelloComponent from "../hello";

afterEach(cleanup);

test("renders", () => {
  render(<HelloComponent />);
});
