import React, { useState } from "react";

import userImg1 from "../../images/messenger_img1.png";
import backImg from "../../images/message_back.png";
import fileImg from "../../images/messenger_file.png";
import enterImg from "../../images/messenger_enter.png";

const MessageWindow = () => {
  const [inputText, setInputText] = useState("");
  const [chatBox, setChatBox] = useState([]);
  const onInputTextChange = (e) => {
    setInputText(e.target.value);
    console.log(inputText);
  };

  const onSubmit = () => {
    // 값이 비었으면 리턴
    if (inputText === "") {
      return;
    } else {
      // 값이 있으면 chatBox 배열에 inputText 추가
      setChatBox(chatBox.concat(inputText));
    }
    console.log(chatBox);
    // 채팅을 보내면 input 비워주기
    setInputText("");
  };
  return (
    <section className="messenger_right">
      <div className="m_reply_message_area">
        <div className="m_message_time">
          <span className="m_date">오전</span>
          <span className="m_time">00:00</span>
        </div>
        <div>
          <div className="m_reply_message_img_cove">
            <img src={userImg1} alt="messenger_img" />
          </div>
          <div className="m_reply_message">Lorem ipsum dolor sit amet</div>
          <div className="m_reply_message">Lorem ipsum dolor sit amet</div>
          <div className="m_reply_message">Lorem ipsum dolor sit amet, con</div>
        </div>
      </div>
      {/* <div className="m_my_message_area">
        <div className="m_message_time">
          <span className="m_date">오후</span>
          <span className="m_time">00:00</span>
        </div>
        <div>
          <div className="m_my_message">
            Lorem ipsum dolor sit amet
            <a className="m_my_message_del">
              <img src={backImg} alt="message_back" />
            </a>
          </div>
          <div className="m_my_message">
            Lorem ipsum dolor sit amet
            <a className="m_my_message_del">
              <img src={backImg} alt="message_back" />
            </a>
          </div>
          <div className="m_my_message">
            Lorem ipsum dolor sit amet, con
            <a className="m_my_message_del">
              <img src={backImg} alt="message_back" />
            </a>
          </div>
        </div>
      </div> */}
      {chatBox.map((data) => {
        return (
          <div className="m_my_message">
            {data}
            <a className="m_my_message_del">
              <img src={backImg} alt="message_back" />
            </a>
          </div>
        );
      })}
      <div className="messenger_chat_bar">
        <a className="m_file_att">
          <img src={fileImg} alt="file" />
        </a>
        <textarea
          className="m_chat_text"
          type="text"
          placeholder="메세지 보내기..."
          value={inputText}
          onChange={onInputTextChange}
        ></textarea>
        <a className="m_message_enter" onClick={onSubmit}>
          <img src={enterImg} alt="enter" />
        </a>
      </div>
    </section>
  );
};

export default MessageWindow;
