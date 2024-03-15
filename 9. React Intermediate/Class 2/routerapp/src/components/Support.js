import React from "react";
import { useNavigate } from "react-router-dom";

const Support = () => {

  const navigate = useNavigate();

  function clickHandler() {
    // !Navigate to about Page
    navigate("/labs");
  }


  function backHandler(){
    navigate(-1);
    //! -1 meaing back one page
  }


  return (
    <div>
      <div>About</div>
      <button onClick={clickHandler}>Move to Labs Page</button>
      <button onClick={backHandler}>Go Back</button>
    </div>
  );
};

export default Support;
