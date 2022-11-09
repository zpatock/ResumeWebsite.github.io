import { useState } from "react";
import { Link } from "react-router-dom";


function NavItem(props) {
  const [open, setOpen] = useState(false);



  return (
    <li className="nav-item" id={props.id}>
      <span className="icon-button" onClick={() => setOpen(!open)}>
        <Link to="/">{props.icon}</Link>
      </span>
    </li>
  );
}

export default NavItem;
