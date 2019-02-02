import React from "react";
import { hot } from "react-hot-loader";
import styles from "./assets/css/global.scss";

function Header() {
  return (
    <div className={styles.red}>
      <h2 className={styles.green}>Let's start the Journey together!</h2>
    </div>
  );
}

function App() {
  return <Header />;
}

export default hot(module)(App);
