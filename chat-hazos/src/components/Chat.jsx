import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  const [prompt, setPrompt] = useState("");

  const [chatData, setChatData] = useState({ "history": [{ "type": "openai", "data": "If you type something I'll convert it in birdlanguage" }], "response": "" });
  
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_Open_AI_Key,
  });
  
  const openai = new OpenAIApi(configuration);

  const generateResponse = async () => {
    // tip! keep error handling at the beginning
    if (prompt === "")
      return false; // why do anything is nothing is in the input

    let newChatData = Object.assign({}, chatData) //start with a fresh object
    if (chatData.response !== "")
      newChatData.history.push({ "type": "openai", "data": chatData.response }) //push the previous openai response in the history stack
    newChatData.history.push({ "type": "user", "data": prompt }) //push the current user input in the history stack

    // You as a developer handle the code - that means you can manipulate it and add extra prompts before sending it to openAI
    // In this example, I chose to add an extra message to my request, on top of the user input, to convert whatever the user wrote -> into emojis
    let openAIPrompt = "Convert Ubisoft game titles into emoji.\n" + prompt + ':';
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