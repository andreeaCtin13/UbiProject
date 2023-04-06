import React, { useRef } from "react";

import Attach from "../images/attach.png";

const Input = ({ handleClick, handleChange }) => {

  const inputElement = useRef();

  function handleSubmit(e) {
    e.preventDefault();
  }

  const cancelCourse = () => {
    handleClick();
    inputElement.current.value="";
    //document.getElementById("user-input").reset();
    console.log(document.getElementById("user-input"))
  };

  

  return (
    <div className="input">
      <input
        ref={inputElement}
        type="text"
        placeholder="Type your message here"
        id="user-input"
        onChange={(e) => handleChange(e.target.value)}
      />
      <div className="send">
        <img src={Attach} alt="" />

        <form
          action=""
          onSubmit={(e) => handleSubmit(e)}
        >
          <input type="file" style={{ display: "none" }} id="file" />

          <button onClick={cancelCourse}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Input;
