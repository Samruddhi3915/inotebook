import React from "react";

import MovingText from "react-moving-text";
// import { useContext, useEffect } from "react";
// import noteContext from "../context/notes/noteContext";
const myAnimatedTypo = () => {
  return (
    <MovingText
      type="fadeIn"
      duration="1000ms"
      delay="1s"
      direction="normal"
      timing="ease"
      iteration="infinite"
      fillMode="none"
    >
      <center>
        <p>
          <h5>your notebook on cloud- safe and secure</h5>
        </p>
      </center>
    </MovingText>
  );
};
const About = () => {
  //   const a = useContext(noteContext);
  //   useEffect(() => {
  //     a.update();
  //   }, []);
  return (
    // <div style={{ backgroundColor: "red" }}>
    <div>
      <center>
        <h1>Welcome to INotebook!</h1>
      </center>
      <div>
        <MovingText
          type="pulse"
          duration="1000ms"
          delay="1s"
          direction="normal"
          timing="ease"
          iteration="infinite"
          fillMode="none"
        >
          <center>
            <p>
              <h5 style={{ color: "gray" }}>
                your notebook on cloud- safe and secure
              </h5>
            </p>
          </center>
        </MovingText>
      </div>
      <div>
        <p>
          <br />
          <h3 style={{ marginLeft: "1%" }}>Motivation:</h3>
        </p>
        {/* <center> */}
        <p style={{ marginLeft: "1%" }}>
          INotebook is made from the pain of writing all the things in notebook
          which is very hectic to maintain now a days. It's an online web
          platform where you can create,edit,upload,delete your notes privately
          and securely.
        </p>
        {/* </center> */}
        <br />
      </div>
      {/* This is about{a.state.name} */}
    </div>
    // </div>
  );
};

export default About;
