import { useState } from "react";
import { Link } from "react-router-dom";
import BackgroundClick from "./BackgroundClick";

function NavItem(props) {
  const [open, setOpen] = useState(false);

function openBackground() {
  setOpen(true);
}

function closeBackground() {
  setOpen(false);
}

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
