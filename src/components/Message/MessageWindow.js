import React from "react";

import userImg1 from "../../images/messenger_img1.png";
import backImg from "../../images/message_back.png";
import fileImg from "../../images/messenger_file.png";
import enterImg from "../../images/messenger_enter.png";

const MessageWindow = () => {
  return (
    <section class="messenger_right">
      <div class="m_reply_message_area">
        <div class="m_message_time">
          <span class="m_date">오전</span>
          <span class="m_time">00:00</span>
        </div>
        <div>
          <div class="m_reply_message_img_cove">
            <img src={userImg1} alt="messenger_img" />
          </div>
          <div class="m_reply_message">Lorem ipsum dolor sit amet</div>
          <div class="m_reply_message">Lorem ipsum dolor sit amet</div>
          <div class="m_reply_message">Lorem ipsum dolor sit amet, con</div>
        </div>
      </div>
      <div class="m_my_message_area">
        <div class="m_message_time">
          <span class="m_date">오후</span>
          <span class="m_time">00:00</span>
        </div>
        <div>
          <div class="m_my_message">
            Lorem ipsum dolor sit amet
            <a class="m_my_message_del">
              <img src={backImg} alt="message_back" />
            </a>
          </div>
          <div class="m_my_message">
            Lorem ipsum dolor sit amet
            <a class="m_my_message_del">
              <img src={backImg} alt="message_back" />
            </a>
          </div>
          <div class="m_my_message">
            Lorem ipsum dolor sit amet, con
            <a class="m_my_message_del">
              <img src={backImg} alt="message_back" />
            </a>
          </div>
        </div>
      </div>
      <div class="messenger_chat_bar">
        <a class="m_file_att">
          <img src={fileImg} alt="file" />
        </a>
        <textarea
          class="m_chat_text"
          type="text"
          placeholder="메세지 보내기..."
        ></textarea>
        <a class="m_message_enter">
          <img src={enterImg} alt="enter" />
        </a>
      </div>
    </section>
  );
};

export default MessageWindow;
