import React from 'react';
import './css/chatbot.css'; //  chatbot.css 

const Chatbot = () => {
  return (
    <div className="container" style={{ position: 'fixed', bottom: 0, right: 0 }}>
      <div className="chatbox">
        <div className="chatbox__support">
          <div className="chatbox__header align-items-center pt-sm-4">
            <div className="chatbox__image--header">
              <img className="chatbox_header_image" src={`${process.env.PUBLIC_URL}/img/dolfinlogoborder.png`} alt="image" />
            </div>
            <div className="chatbox__content--header">
              <h4 className="chatbox__heading--header">Chatbot</h4>
            </div>
          </div>
          <div className="chatbox__messages">
            <div></div>
          </div>
          <div className="chatbox__footer">
            <input style={{ fontSize: 'large', borderRadius: '10px', border: 'none' }} type="text" placeholder="Write a message..." />
            <button className="chatbox__send--footer send__button">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
              </svg>
            </button>
            <button className="chatbox__send--footer voice__button">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-mic" viewBox="0 0 16 16">
                <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="container" id="chatCloudID">
          <div className="chatbox__button">
            <button id="hover-button"><img src={`${process.env.PUBLIC_URL}/img/chat_724715.png`} alt="chatbot-button" /></button>
          </div>
          <div className="text-cloud" id="chatbot-cloud">
            <p className="h5">Hello, I'm the chatbot. <br /> How can I help you today?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
