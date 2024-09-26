import React, { useRef } from "react";

const LearnUseRef1 = () => {
  let ref1 = useRef();
  let ref2 = useRef();
  let ref3 = useRef();
  let button1 = useRef();
  let inputRef = useRef();
  return (
    <div>
      <p ref={ref1}>Hello</p>
      <p ref={ref2}>Rishav</p>
      <p ref={ref3}>This is paragraph</p>
      <button
        ref={button1}
        onClick={(e) => {
          if 
          (ref3.current.style.backgroundColor === "red")
          {
            ref3.current.style.backgroundColor = "white";
            ref3.current.style.color = "black";
            ref2.current.style.backgroundColor = "white";
            button1.current.style.backgroundColor = "white";
          }
          else{
          ref3.current.style.backgroundColor = "red";
          ref3.current.style.color = "white";
          ref2.current.style.backgroundColor = "green";
          button1.current.style.backgroundColor = "blue";}
        }}
      >
        Change CSS
      </button>
     <br></br>
      <button onClick={(e) =>{
        inputRef.current.focus();
      }}>
        Focus Input
      </button>
      <input ref = {inputRef}></input>
      </div>
  );
};

export default LearnUseRef1;
