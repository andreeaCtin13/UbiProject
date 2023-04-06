import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  const [prompt, setPrompt] = useState(false);

  const [chatData, setChatData] = useState({ "history": [{ "type": "openai", "data": "Hi! My name is Dora and I'm really good at telling jokes... just give me a word and I will make u laugh <3" }], "response": "" });
  
  //console.log(process.env.REACT_APP_Open_AI_Key)
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

   
    let openAIPrompt = "Tell me a joke that contains the word \n" + prompt + ':';
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: openAIPrompt,
      temperature: 0.8,
      max_tokens: 60,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop: ["\\n"],
    });
    console.log('response', response);
    let processedResponse = response.data.choices[0].text; // I'm only using the text in my example
    newChatData.history.push({ "type": "openai", "data": processedResponse })
    setChatData(newChatData);
  }
  
  return (
    <div className="chat">
      <Messages message={chatData.history} />
      <Input handleChange={setPrompt} handleClick={generateResponse}/>
    </div>
  );
};

export default Chat;