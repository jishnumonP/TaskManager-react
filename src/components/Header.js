import React from "react";

import "../App.scss";
import Button from "./Button";
const Header = ({ title,onAdd ,showAdd}) => {
  
  return (
    <div className="mainContainer">
      <div className="heading">
        <h1>{title}</h1>
      </div>
      <Button text={showAdd ? "close" : "Add"} onClick={onAdd}/>
    </div>
  );
};

export default Header;
