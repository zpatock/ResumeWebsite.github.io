function WorkCard(props) {
  return (
  <div className="workCard">{props.job}
    <span style={{float: "right"}}>{props.time}</span>
    <div><em>{props.place}</em></div>
    <br/>{props.children}</div>);
}

export default WorkCard;
