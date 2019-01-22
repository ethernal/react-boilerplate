import React from "react";
import { hot } from "react-hot-loader";
import styles from "./app.module.scss";

function Header(style) {
  return (
    <h2 className={styles.red}>Let's start the Journey along with Noemi!</h2>
  );
}

function App() {
  return <Header />;
}

export default hot(module)(App);
