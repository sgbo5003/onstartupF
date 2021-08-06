import React, { useEffect, useState } from "react";
import "../../css/content.css";
import axios from "axios";
import Content from "./Content";
import Slider from "react-slick";
// import "../css/_slick.css";
import "../../css/_slick-theme.css";
import "../../css/slick.css";
import ScrollButton from "../ScrollButton";
import viewIcon1 from "../../images/view_icon1.png";
import viewIcon2 from "../../images/view_icon2.png";
import defaultUserImg from "../../images/default_user.png";

const ContentPage = () => {
  const [data, setData] = useState({
    user_idx: [], // user 순서
    user_name: [], // user 이름
    user_belong: [], // user 소속
    comment_time: [], // user 댓글 시간
    comment_text: [], // user 댓글 내용
    comment_like_num: [], // comment 좋아요 수
    comment_reply_num: [], // comment 댓글 수
    comment_share_num: [], // comment 공유 수
    comment_save_num: [], // comment 저장 수
    comment_view_num: [], // content 조회 수
    user_img_root: [], // user 프사 경로
    user_img_name: [], // user 프사 이름
    comment_img_root: [], // comment 이미지 경로
    comment_img_name: [], // comment 이미지 이름
  });

  // 이미지 값이 null인지 있는지 확인하는 함수
  function checkImg(idx, type) {
    const address = "http://15.164.227.114/web/";
    // 유저 프로필 사진 값 체크
    if (type == "user") {
      if (data.user_img_root[idx] == null || data.user_img_name[idx] == null) {
        return defaultUserImg;
      } else {
        return address + data.user_img_root[idx] + data.user_img_name[idx];
      }
    } // 유저가 등록한 사진 값 체크
    else if (type == "comment") {
      if (
        data.comment_img_root[idx] == null ||
        data.comment_img_name[idx] == null
      ) {
        return defaultUserImg;
      } else {
        return (
          address + data.comment_img_root[idx] + data.comment_img_name[idx]
        );
      }
    }
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: (
      <button type="button" className="slick-prev">
        Previous
      </button>
    ), // 이전 화살표 모양 설정
    nextArrow: (
      <button type="button" className="slick-next">
        Next
      </button>
    ), // 다음 화살표 모양 설정
  };

  // const getData = async () => {
  //   const response = await axios.get("/get_info.php?comment=4");
  //   setData(response.data);
  // };

  const getData = () => {
    const params = new FormData();
    params.append("command", 4);

    axios({
      method: "post",
      url: "/response/get_info.php",
      data: params,
    })
      .then((response) => {
        console.log(response);
        // data 받아온거 담기
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
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
            {data.user_idx.map((item, idx) => {
              return (
                <Content
                  key={data.user_idx[idx]}
                  title={data.user_name[idx]}
                  belong={data.user_belong[idx]}
                  commentTime={data.comment_time[idx]}
                  commentText={data.comment_text[idx]}
                  commentLikeNum={data.comment_like_num[idx]}
                  commentReplyNum={data.comment_reply_num[idx]}
                  commentShareNum={data.comment_share_num[idx]}
                  commentSaveNum={data.comment_save_num[idx]}
                  userImgRoot={data.user_img_root[idx]}
                  userImgName={data.user_img_name[idx]}
                  commentImgRoot={data.comment_img_root[idx]}
                  commentImgName={data.comment_img_name[idx]}
                  checkUserImg={checkImg(idx, "user")}
                  checkCommentImg={checkImg(idx, "comment")}
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
            {data.user_idx
              .slice(0)
              .reverse()
              .map((item, idx) => {
                return (
                  <Content
                    key={data.user_idx[idx]}
                    title={data.user_name[idx]}
                    belong={data.user_belong[idx]}
                    commentTime={data.comment_time[idx]}
                    commentText={data.comment_text[idx]}
                    commentLikeNum={data.comment_like_num[idx]}
                    commentReplyNum={data.comment_reply_num[idx]}
                    commentShareNum={data.comment_share_num[idx]}
                    commentSaveNum={data.comment_save_num[idx]}
                    checkUserImg={checkImg(idx, "user")}
                    checkCommentImg={checkImg(idx, "comment")}
                  />
                );
              })}
          </Slider>
        </div>
        <div className="home_view">
          <h2>오늘의 NEW TOPIC</h2>
          <Slider {...settings}>
            {data.user_idx.map((item, idx) => {
              return (
                <Content
                  key={data.user_idx[idx]}
                  title={data.user_name[idx]}
                  belong={data.user_belong[idx]}
                  commentTime={data.comment_time[idx]}
                  commentText={data.comment_text[idx]}
                  commentLikeNum={data.comment_like_num[idx]}
                  commentReplyNum={data.comment_reply_num[idx]}
                  commentShareNum={data.comment_share_num[idx]}
                  commentSaveNum={data.comment_save_num[idx]}
                  checkUserImg={checkImg(idx, "user")}
                  checkCommentImg={checkImg(idx, "comment")}
                />
              );
            })}
          </Slider>
        </div>
        <ScrollButton />
      </div>
    </div>
  );
};

export default ContentPage;
