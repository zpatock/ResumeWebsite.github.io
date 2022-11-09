
// Work card component that allows for less repeated code when making the work experience pages
function WorkCard(props) {
  return (
  <div className="workCard">{props.job}
    <span style={{float: "right"}}>{props.time}</span>
    <div><em>{props.place}</em></div>
    <br/>{props.children}</div>);
}

export default WorkCard;
