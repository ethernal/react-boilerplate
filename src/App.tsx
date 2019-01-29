import React from "react";
import { hot } from "react-hot-loader";
import styles from "./assets/css/global.scss";

function Header() {
  return <h2 className={styles.red}>Let's start the Journey together!</h2>;
}

function App() {
  return <Header />;
}

export default hot(module)(App);
