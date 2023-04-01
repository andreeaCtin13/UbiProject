import React, {  useState } from "react";

import Attach from "../images/attach.png";


const Input = ({handleClick, handleChange}) => {

  function handleSubmit(e) {
    e.preventDefault();
}

  return (
    <div className="input">
      <input
        type="text"
        
        placeholder="Type your message here" id="user-input" onChange={(e) => handleChange(e.target.value)}
      />
      <div className="send">
        <img src={Attach} alt="" />

        <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
        />
     
        <button  onClick={handleClick}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Input;