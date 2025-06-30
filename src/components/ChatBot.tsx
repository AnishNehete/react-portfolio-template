import React from "react";

const ChatBot = () => {
  return (
    <section id="chatbot" className="section chatbot">
      <div className="container">
        <h2 className="section-title">Ask Me Anything !!</h2>
        <p className="section-subtitle">
          Chat with my AI assistant trained on my professional background and projects.
        </p>
        <iframe
          src="https://AnishNehete-AskMyCV.hf.space"
          title="Anish Chatbot"
          width="80%"
          height="800"
          style={{ border: "1px solid #ccc", borderRadius: "10px" }}
          allow="clipboard-write"
        ></iframe>
      </div>
    </section>
  );
};

export default ChatBot;
