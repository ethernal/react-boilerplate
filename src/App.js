import React from "react";
import { hot } from "react-hot-loader";
import styles from "./app.module.scss";

function Header(style) {
  return <h2 className={styles.red}>Lets start the Journey!</h2>;
}

function App() {
  return <Header />;
}

export default hot(module)(App);
