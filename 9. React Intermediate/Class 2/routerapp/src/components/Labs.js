import React from "react";
import { useNavigate } from "react-router-dom";

const Labs = () => {
  const navigate = useNavigate();

  function clickHandler() {
    // !Navigate to about Page
    navigate("/about");
  }

  return (
    <div>
      <div> This is a Labs</div>
      <button onClick={clickHandler}>Move to About Page</button>
    </div>
  );
};

export default Labs;
