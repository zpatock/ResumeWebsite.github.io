function Projects(props) {
    return (
    <div className="workCard">
        {props.name}<br/>
      <br/>{props.children}</div>);
  }
  
  export default Projects;
  