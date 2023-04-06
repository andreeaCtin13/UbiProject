const Messages = ({message, response}) => {
  return (
    <div className="messages">
       {message.map((item, index) => (
    <div 
    className="message"
    key={index}>
    <div className="messageInfo">
      {index%2==0 ? <img
      src="https://th.bing.com/th/id/R.6597f900d68e1a075b04cfa8b7fd7616?rik=CzY0za9JR%2bsKjg&pid=ImgRaw&r=0"
      alt=""
    />
      :
      <img
      src="https://st4.depositphotos.com/18126772/25053/v/450/depositphotos_250537942-stock-illustration-portrait-smiling-afro-man-bearded.jpg"
      alt=""
    />
    }
      
    </div>
    <div className="messageContent">
      <p>{item.data}</p>
   </div>
  </div>
  ))}
   {response && (
        <div 
        className="messageResponse"
        key="response">
        <div className="messageInfo">
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