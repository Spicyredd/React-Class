import React, { useRef } from "react";

const LearnUseRef2 = () => {
  let ref1 = useRef();
  return (
    <div
      ref={ref1}
      style={{ width: "100vw", height: "100vh", backgroundColor: "white" }}
    >
      <button
        onClick={(e) => {
          ref1.current.style.backgroundColor = "white";
        }}
      >
        White
      </button>
      <button
        onClick={(e) => {
          ref1.current.style.backgroundColor = "black";
        }}
      >
        Black
      </button>
    </div>
  );
};

export default LearnUseRef2;
