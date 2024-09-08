import React, { useState } from "react";
import Editor from "../Component/Editor";
import Client from "../Component/Client";
const EditorPage = () => {
    const [clients,setclients] =useState( [
      { socketId: "1", username: "jon doe " },
      { socketId: "2", username: "raj k. sharma " },
      { socketId: "3", username: "jonny" },
      { socketId: "4", username: "jon doe " },
      { socketId: "5", username: "raj k. sharma " },
      { socketId: "6", username: "jonny" },{ socketId: "1", username: "jon doe " },
      { socketId: "7", username: "raj k. sharma " },
      { socketId: "8", username: "jonny" },
    ]);
  return (
    <div className="mainWrap">
      <div className="aside">
        <div className="asideInner">
          <div className="logo">
            <img className="logoImage" src="/logo.png" alt="logo" />
          </div>
          <h3>Connected</h3>
          <div className="clientsList">
            {clients.map((client) => (
              <Client key={client.socketId} username={client.username} />
            ))}
          </div>
        </div>
        <button className="btn copyBtn" >
          Copy ROOM ID
        </button>
        <button className="btn leaveBtn" >
          Leave
        </button>
      </div>
      <div className="editorWrap">
        <Editor
          
        />
      </div>
    </div>
  );
};

export default EditorPage;
