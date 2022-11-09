import Navbar from "./Navbar";
import NavItem from "./NavItem";
import NavItem2 from "./NavItemNoLink";
import { ReactComponent as HomeIcon } from "../icons/home-svgrepo-com.svg";
import { ReactComponent as WorkIcon } from "../icons/work-svgrepo-com.svg";
import { ReactComponent as SkillsIcon } from "../icons/skills-svgrepo-com.svg";
import DropDownMenu from "./DropDownMenu";
import { Link } from "react-router-dom";
import BackgroundClick from "./BackgroundClick";

//This Component acts as the layout seen at the top of the screen
function Layout() {
  return (
    <Navbar>
      <NavItem icon={<HomeIcon />} id="nav1">
        <Link to="/"></Link>
      </NavItem>
      <span id="title"> Zachary Patock's Resume</span>
      <NavItem2 icon={<SkillsIcon />}>
        <DropDownMenu></DropDownMenu><BackgroundClick></BackgroundClick>
      </NavItem2>
    </Navbar>
  );
}

export default Layout;
