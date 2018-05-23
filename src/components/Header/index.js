import React from "react";

import classNames from "./Header.module.css";
import Button from "../Button/";
import AddQuestion from "../Application/AddQuestion";

const Header = () => (
  <header className={classNames.Header}>
    <div className={classNames.brand} />
    <div className={classNames.links}>
      <AddQuestion />
    </div>
  </header>
);

export default Header;
