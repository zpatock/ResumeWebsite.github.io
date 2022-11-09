//Project componet that allows for less repeated code when making the project page
function Projects(props) {
    return (
    <div className="workCard">
        {props.name}<br/>
      <br/>{props.children}</div>);
  }
  
  export default Projects;
  