
import picture from "../components/icons/pic.jpg"

function MainPage() {
  return (
    <div>
      <p className="workCard">
        <h2 style={{textAlign: "center"}}>ZACHARY PATOCK</h2>
        <div style={{textAlign: "center", scale: "70%"}}><img src={picture} alt="Picture" ></img></div>
        <h4 style={{textAlign: "center"}}>Contact Information:</h4>
        <div style={{textAlign: "center"}}>New London, MN-56273 
          | 320-212-6594 | zachary.patock@gmail.com | https://github.com/zpatock<br/><br/></div>
  </p></div>
    
  );
}

export default MainPage;
