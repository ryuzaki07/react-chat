import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../components/Options/Options";
import Quiz from "../components/Quiz/Quiz";

const config = {
  botName: "LearningBot",
  initialMessages: [
    createChatBotMessage(`Hello. What do you want to learn`, {
      widget: "options"
    })
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#FF0000"
    },
    chatButton: {
      backgroundColor: "#FF0000"
    }
  },
  customComponents: {
    // Replaces the default header
    header: () => <div class="react-chatbot-kit-chat-header">rahul</div>
    // Replaces the default bot avatar
  }
};
function Head() {
  return (
    <div>
      <p>some text</p>
    </div>
  );
}

export default config;
