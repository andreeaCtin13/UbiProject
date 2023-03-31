import React, { useContext, useEffect, useRef } from "react";

const Message = () => {


  return (
    <div 
      className="message"
    >
      <div className="messageInfo">
        <img
          src="https://www.pngfind.com/pngs/m/114-1146521_girl-avatar-png-picture-female-avatar-no-face.png"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hei, cf?</p>
     </div>
    </div>
  );
};

export default Message;