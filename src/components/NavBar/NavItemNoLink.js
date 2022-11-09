import { useState } from "react";
import { Link } from "react-router-dom";
import BackgroundClick from "./BackgroundClick";

function NavItem(props) {
  const [open, setOpen] = useState(false);


function closeBackground() {
  setOpen(false);
}

//The function creates a list item that gets placed into the navbar component
  return (
    <li className="nav-item" id={props.id}> 
      <span className="icon-button" onClick={() => {setOpen(!open)}}>
        {props.icon}
      </span>
      {open && props.children}
      {open && <BackgroundClick onClick={closeBackground}></BackgroundClick> }
    </li>
  );
}

export default NavItem;
