import * as React from "react";
import { hot } from "react-hot-loader";

export const HelloComponent = () => {
  return <h2>Hello component !</h2>;
};

export default hot(module)(HelloComponent);
