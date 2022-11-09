import { ReactComponent as CogIcon } from "../icons/big-cogwheel-svgrepo-com.svg";
import { ReactComponent as BackArrow } from "../icons/back-arrow-svgrepo-com.svg";
import { ReactComponent as ProjectIcon } from "../icons/task-svgrepo-com.svg";
import { ReactComponent as CourseWorkIcon } from "../icons/studying-svgrepo-com.svg";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import { ReactComponent as WorkIcon } from "../icons/work-svgrepo-com.svg";
import { ReactComponent as ProfileIcon } from "../icons/profile-user-svgrepo-com.svg";
import { Link } from "react-router-dom";


//Creates a 


function DropDownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <span
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
      </span>
    );
  }

  function DropdownItem2(props) {
    return (
      <div>
        <Link className="menu-item" to={props.link}>
          {props.children}
        </Link>
      </div>
    );
  }

  function DropdownItem3(props) {
    return (
      <div>
        <Link className="menu-item" to={props.link}>
          <span className="icon-button">{props.leftIcon}</span>
          {props.children}
        </Link>
      </div>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          {/*}
          <DropdownItem leftIcon={<ProfileIcon id="specIcon" />}>
            Education & Skills
          </DropdownItem>
          {*/}
          <DropdownItem3
            link="/educationSkills"
            leftIcon={<ProfileIcon id="specIcon" />}
          >
            Education & Skills
          </DropdownItem3>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<CogIcon />}
            goToMenu="workexp"
          >
            Experience
          </DropdownItem>
          <DropdownItem3 leftIcon={<ProjectIcon id="specIconProj"/>} link="/projects">
            Projects
          </DropdownItem3>
          <DropdownItem3 leftIcon={<CourseWorkIcon />} link="/courseWork">
            Coursework
          </DropdownItem3>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "workexp"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<BackArrow />}>
            Back
          </DropdownItem>
          <DropdownItem2 link="/workExperience1">IT Specialist</DropdownItem2>
          <DropdownItem2 link="/workExperience2">
            Information Technology Specialist
          </DropdownItem2>
          <DropdownItem2 link="/workExperience3">
            Intramural Sports Manager
          </DropdownItem2>
        </div>
      </CSSTransition>
    </div>
  );
}

export default DropDownMenu;
