import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const About = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  return (
    <div>
      About Page
      <br></br>
      Name is {searchParams.get("name")}
      <br></br>
      Age is {searchParams.get("age")}
      <br></br>
      Address is {searchParams.get("address")}
      <br></br>
      <button
        onClick={(e) => {
          navigate("/contact", { replace: true });
        }}
      >
        Contact Page
      </button>
    </div>
  );
};

export default About;
