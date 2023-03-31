import React, {  useState } from "react";

import Attach from "../images/attach.png";


const Input = () => {
  const [text, setText] = useState("");
      
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Scrie..."
        
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="send">
        <img src={Attach} alt="" />
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
        />
     
        <button >Send</button>
      </div>
    </div>
  );
};

export default Input;