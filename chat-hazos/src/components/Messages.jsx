



const Messages = ({message, response}) => {
  return (
    <div className="messages">
       {message.map((item, index) => (
    <div 
    className="message"
    key={index}>
    <div className="messageInfo">
      <img
        src="https://www.pngfind.com/pngs/m/114-1146521_girl-avatar-png-picture-female-avatar-no-face.png"
        alt=""
      />
    </div>
    <div className="messageContent">
      <p>{item.data}</p>
   </div>
  </div>
  ))}
   {response && (
        <div 
        className="message"
        key="response">
        <div className="messageInfo">
          <img
            src="https://www.pngfind.com/pngs/m/114-1146521_girl-avatar-png-picture-female-avatar-no-face.png"
            alt=""
          />
        </div>
        <div className="messageContent">
          <p>{response}</p>
       </div>
      </div>
      )}
    
    </div>
  );
};

export default Messages;