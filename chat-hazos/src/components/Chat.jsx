import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  const [prompt, setPrompt] = useState(false);

  const [chatData, setChatData] = useState({ "history": [{ "type": "openai", "data": "If you type something I'll convert it in birdlanguage" }], "response": "" });
  
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_Open_AI_Key,
  });
  
  const openai = new OpenAIApi(configuration);

  const generateResponse = async () => {
    if (prompt === false)
      return false; 
    setPrompt(!prompt)
    let newChatData = Object.assign({}, chatData) 
    if (chatData.response !== "")
      newChatData.history.push({ "type": "openai", "data": chatData.response })
    newChatData.history.push({ "type": "user", "data": prompt })

   
    let openAIPrompt = "Add pa after every syllable from: \n" + prompt + ':';
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: openAIPrompt,
      temperature: 0.8,
      max_tokens: 60,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop: ["\n"],
    });
    console.log('response', response);
  }
  
  return (
    <div className="chat">
      <Messages message={chatData.history} />
      <Input handleChange={setPrompt} handleClick={generateResponse}/>
    </div>
  );
};

export default Chat;