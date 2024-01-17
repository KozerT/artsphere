import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <h1>Artsphere</h1>
      <p className={classes.paragraph}>
        A community of artists and art-lovers.
      </p>
    </header>
  );
};

export default Header;
