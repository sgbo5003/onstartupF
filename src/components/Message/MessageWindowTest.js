import React, { useEffect, useState } from "react";

import userImg1 from "../../images/messenger_img1.png";
import backImg from "../../images/message_back.png";
import fileImg from "../../images/messenger_file.png";
import enterImg from "../../images/messenger_enter.png";

const MessageWindowTest = () => {
  const [inputText, setInputText] = useState("");
  const [chatBox, setChatBox] = useState([]);
  const [image, setImage] = useState(); // 이미지 파일
  const [imageName, setImageName] = useState(""); // 이미지 파일 이름
  const onInputTextChange = (e) => {
    setInputText(e.target.value);
    console.log(inputText);
  };

  const onChangeImg = (e) => {
    setImage(e.target.files[0]);
    setImageName(e.target.files[0].name);
    setInputText(imageName);
    console.log(imageName);
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
        <div className="m_message_chatBox">
          {chatBox.map((data, idx) => {
            return (
              <div className="m_my_message" key={idx}>
                {data}
                <a className="m_my_message_del">
                  <img src={backImg} alt="message_back" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div className="messenger_chat_bar">
        <input
          type="file"
          name="comment_file"
          id="file"
          onChange={onChangeImg}
          accept="image/gif, image/jpeg, image/png, image/bmp,"
          style={{ display: "none" }}
        />
        <label htmlFor="file" className="m_file_att">
          <img src={fileImg} alt="file" />
        </label>
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

export default MessageWindowTest;
