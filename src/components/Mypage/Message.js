import React, { useEffect, useState } from "react";
import userImg1 from "../../images/messenger_user1.png";
import userImg2 from "../../images/messenger_user2.png";
import userImg3 from "../../images/messenger_user3.png";
import userImg4 from "../../images/messenger_user4.png";
import MessageWindow from "./MessageWindow";

const Message = () => {
  const userInfo = [
    {
      userImg: userImg1,
      userName: "유저1",
      userComment: "Lorem ipsum dolor sit amet",
      date: "어제",
      time: "",
    },
    {
      userImg: userImg2,
      userName: "유저2",
      userComment: "Lorem ipsum dolor sit amet",
      date: "어제",
      time: "",
    },
    {
      userImg: userImg3,
      userName: "유저3",
      userComment: "Lorem ipsum dolor sit amet",
      date: "오전",
      time: "00:00",
    },
    {
      userImg: userImg4,
      userName: "유저4",
      userComment: "Lorem ipsum dolor sit amet",
      date: "오전",
      time: "00:00",
    },
  ];

  // 메세지 창 on & off 감지 state
  const [messageOn, setMessageOn] = useState(false);
  // 유저 메세지 감지 리스트
  //   const [userMessageCheckedItems, setUserMessageCheckedItems] = useState(
  //     new Set()
  //   );
  //   // 대화창 띄우는 것을 결정하는 state
  //   const messageRenderHandler = () => {
  //     setMessageOn(true);
  //   };
  // 유저 메신저를 체크했는지 감지하는 함수
  //   const onUserCheckHandler = (data) => {
  //     let itemSet = new Set(userMessageCheckedItems);
  //     setMessageOn(true);
  //     if (userMessageCheckedItems.has(data)) {
  //       itemSet.clear();
  //       itemSet.add(data);
  //       setUserMessageCheckedItems(itemSet);
  //     } else {
  //       itemSet.add(data);
  //       setUserMessageCheckedItems(itemSet);
  //     }
  //     console.log(data, userMessageCheckedItems.values());
  //   };

  // messageOn = true, set(유저1)
  //
  return (
    <div className="wap messenger_wap">
      <div className="messenger_content">
        <div className="messenger_view">
          <section className="messenger_left">
            {userInfo.map((data, idx) => {
              return (
                <div
                  key={idx}
                  //   className={`messenger_item_list ${
                  //     userMessageCheckedItems.has(data.userName)
                  //       ? "_user_selected"
                  //       : ""
                  //   }`}
                  className="messenger_item_list"
                  //   onClick={() => {
                  //     onUserCheckHandler(data.userName);
                  //   }}
                  onClick={() => {
                    setMessageOn(true);
                  }}
                >
                  <p className="m_user_profile_cove">
                    <img src={data.userImg} alt="user_profile" />
                  </p>
                  <div className="m_user_info">
                    <h3 className="m_user_nick">{data.userName}</h3>
                    <p className="m_user_messege">{data.userComment}</p>
                  </div>
                  <div className="m_dt_group">
                    <span className="m_date">{data.date}</span>
                    <span className="m_time">{data.time}</span>
                  </div>
                </div>
              );
            })}
          </section>
          {messageOn ? <MessageWindow /> : ""}
        </div>
      </div>
    </div>
  );
};

export default Message;
