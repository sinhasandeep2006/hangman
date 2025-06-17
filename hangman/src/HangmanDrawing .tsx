import React from "react";
import face from "./assets/FACE.jpg"
const HEAD=(
  <div style={{
    height: "70px",
          width: "70px",
          background: "#a0785a ",
          
          marginLeft: "120px",
          border: "3px solid black", // Added a solid border with color
          borderRadius: "100%",
          position:"absolute",
          top:"50px",
          right:"-30px",
  }}></div>
)
const BODY=(
  <div style={{
    height: "100px",
          width: "10px",
          background: "#a0785a ",
          
          border: "0.2px solid black", // Added a solid border with color
          borderRadius: "20%",
          position:"absolute",
          top:"123px",
          right:0,
          zIndex:33,
  }}></div>
)

const RIGHT=(
  <div style={{
    height: "10px",
          width: "100px",
          background: "#a0785a ",
          
          border: "0.2px solid black", // Added a solid border with color
          borderRadius: "20%",
          position:"absolute",
          top:"150px",
          right:'-100px',
          rotate:"-30deg",
          transformOrigin: "left bottom"
  }}></div>
)

const LEFT=(
  <div style={{
    height: "10px",
          width: "100px",
          background: "#a0785a ",
          
          border: "0.2px solid black", // Added a solid border with color
          borderRadius: "20%",
          position:"absolute",
          top:"150px",
          right:'10px',
          rotate:"30deg",
          transformOrigin: "RIGHT bottom"
  }}></div>
)

const LEFT_LEG=(
  <div style={{
    height: "10px",
          width: "100px",
          background: "#a0785a ",
          
          border: "0.2px solid black", // Added a solid border with color
          borderRadius: "20%",
          position:"absolute",
          top:"215px",
          right:'10px',
          rotate:"-30deg",
          transformOrigin: "RIGHT"
  }}></div>
)
const RIGHT_LEG=(
  <div style={{
    height: "10px",
          width: "100px",
          background: "#a0785a ",
          
          border: "0.2px solid black", // Added a solid border with color
          borderRadius: "20%",
          position:"absolute",
          top:"265px",
          right:'-80px',
          rotate:"30deg",
          transformOrigin: "RIGHT BOTTOM"
  }}></div>
)
const HangmanDrawing = () => {
  return (
    <div style={{ position: "relative" }}>
      {HEAD}
      {BODY}
      {RIGHT}
      {LEFT}
      {LEFT_LEG}
      {RIGHT_LEG}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "#a0785a ",
          marginLeft: "120px",
          border: "1.5px solid black", // Added a solid border with color
          borderRadius: "50px",
          position:"absolute",
          top:0,
          right:0,
         
        }}
      ></div>
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "#a0785a ",
          marginLeft: "120px",
          border: "1.5px solid black", // Added a solid border with color
          borderRadius: "50px",
        }}
      ></div>
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "#a0785a ",
          marginLeft: "120px",
          border: "1.5px solid black", // Added a solid border with color
          borderRadius: "50px",
          
        }}
      ></div>
      <div
        style={{
          height: "10px",
          width: "250px",
          background: "#a0785a ",
          border: "1.5px solid black", // Added a solid border with color
          borderRadius: "50px",
          
        }}
      ></div>
    </div>
  );
};

export default HangmanDrawing;
