import React from "react";
import { render, cleanup } from "react-testing-library";
import App from "../App";

afterEach(cleanup);

test("renders", () => {
  render(<App />);
});
