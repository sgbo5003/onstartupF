import React, { useEffect, useState } from "react";
import "../../css/content.css";
import axios from "axios";
import Content from "./Content";
import Slider from "react-slick";
// import "../css/_slick.css";
import "../../css/_slick-theme.css";
import "../../css/slick.css";
import ScrollButton from "../common/ScrollButton";
import viewIcon1 from "../../images/view_icon1.png";
import viewIcon2 from "../../images/view_icon2.png";
import defaultUserImg from "../../images/default_user.png";
import CoinButton from "./CoinButton";
import * as fnc from "../../commonFunc/CommonFunctions";

const ContentPage = () => {
  const [topData, setTopData] = useState([]); // 이 글 어때요?
  const [midData, setMidData] = useState([]); // 많은 사람들이 보고 있어요
  const [botData, setBotData] = useState([]); // 오늘의 NEW TOPIC

  // slider 세팅
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,

    nextArrow: (
      <button type="button" className="slick-next">
        Next
      </button>
    ), // 다음 화살표 모양 설정
  };

  const getData = () => {
    fnc.executeQuery({
      url: "action/main/board.php",
      data: {},
      success: (res) => {
        setTopData(res.top);
        setMidData(res.mid);
        setBotData(res.bot);
      },
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="wap home_wap">
      <div className="home_content">
        <div className="home_view">
          <h2>
            이 글 어때요?
            <img src={viewIcon1} alt="icon1.png" />
          </h2>
          <Slider {...settings}>
            {topData == null
              ? ""
              : topData.slice(4).map((item, idx) => {
                  return (
                    <Content
                      key={idx}
                      //   title={data.user_name[idx]}
                      belong={item.member_belong}
                      boardImg={item.board_img}
                      content={item.content}
                      likeNum={item.like_num}
                      reviewNum={item.review_num}
                      shareNum={item.share_num}
                      saveNum={item.save_num}
                      name={item.member_name}
                      profileImg={item.profile_img}
                      writeTime={item.write_time}
                    />
                  );
                })}
          </Slider>
        </div>
        <div className="home_view">
          <h2>
            많은 사람들이 보고 있어요
            <img src={viewIcon2} alt="icon2.png" />
          </h2>
          <Slider {...settings}>
            {midData == null
              ? ""
              : midData.slice(4).map((item, idx) => {
                  return (
                    <Content
                      key={idx}
                      //   title={data.user_name[idx]}
                      belong={item.member_belong}
                      boardImg={item.board_img}
                      content={item.content}
                      likeNum={item.like_num}
                      reviewNum={item.review_num}
                      shareNum={item.share_num}
                      saveNum={item.save_num}
                      name={item.member_name}
                      profileImg={item.profile_img}
                      writeTime={item.write_time}
                    />
                  );
                })}
          </Slider>
        </div>
        <div className="home_view">
          <h2>오늘의 NEW TOPIC</h2>
          <Slider {...settings}>
            {botData == null
              ? ""
              : botData.slice(4).map((item, idx) => {
                  return (
                    <Content
                      key={idx}
                      //   title={data.user_name[idx]}
                      belong={item.member_belong}
                      boardImg={item.board_img}
                      content={item.content}
                      likeNum={item.like_num}
                      reviewNum={item.review_num}
                      shareNum={item.share_num}
                      saveNum={item.save_num}
                      name={item.member_name}
                      profileImg={item.profile_img}
                      writeTime={item.write_time}
                    />
                  );
                })}
            {/* {botData.slice(4).map((item, idx) => {
              return (
                <Content
                  key={idx}
                  //   title={data.user_name[idx]}
                  belong={item.member_belong}
                  boardImg={item.board_img}
                  content={item.content}
                  likeNum={item.like_num}
                  reviewNum={item.review_num}
                  shareNum={item.share_num}
                  saveNum={item.save_num}
                  name={item.member_name}
                  profileImg={item.profile_img}
                  writeTime={item.write_time}
                />
              );
            })} */}
          </Slider>
        </div>
        <CoinButton />
        <ScrollButton />
      </div>
    </div>
  );
};

export default ContentPage;
