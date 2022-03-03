import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import { Fragment } from "react";
import img from "./imageinsrc.jpg";

function App() {
  return (
    <Fragment>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Your name here</h1>

        <br />
        <div className="img">
          <img src={img} />

          <br />

          <img src="/imageinpublic.jpg" />
        </div>
      </div>

      <video width="420" height="340" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </Fragment>
  );
}

export default App;
