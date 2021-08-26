import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as fnc from "../../commonFunc/CommonFunctions";

const QuestionDetail = (props) => {
  const [content, setContent] = useState({});
  const paramsId = props.location.search.split("=")[1];
  const paramsIdValue = parseInt(paramsId);
  const getData = () => {
    fnc.executeQuery({
      url: "action/board/faq.php",
      data: {},
      success: (res) => {
        setContent(res.faq);
      },
    });
  };
  useEffect(() => {
    getData();
  }, [location.href]);
  return (
    <div className="wap notice_wap">
      <div className="notice_content">
        <div className="notice_view">
          <h2 className="fq_view_title">
            자주 묻는 질문
            <span>고객님들께서 가장 자주 묻는 질문들을 모았습니다.</span>
          </h2>
          <section className="notice_top_bar">
            <form className="notice_title">
              <input
                type="text"
                name="notice_title"
                placeholder="제목"
                value={content.title}
                className="node_input_title"
                disabled
              />
              <div className="notice_ts_group">
                <p>작성자</p>
                <input
                  type="text"
                  name="writer"
                  placeholder="작성자"
                  value={content.writer}
                  className="notice_ts notice_twriter"
                  disabled
                />
              </div>
              <div className="notice_ts_group">
                <p>작성일자</p>
                <input
                  type="text"
                  name="date"
                  placeholder="작성일자"
                  value={content.write_date}
                  className="notice_ts notice_tdate"
                  disabled
                />
                <input
                  type="text"
                  name="time"
                  placeholder="시간"
                  value={content.write_time}
                  className="notice_ts notice_ttime"
                  disabled
                />
              </div>
              <div className="notice_ts_group">
                <p>조회수</p>
                <input
                  type="text"
                  name="view"
                  placeholder="조회수"
                  value={content.view}
                  className="notice_ts notice_tview"
                  disabled
                />
              </div>
              <div className="notice_ts_category">
                <p>카테고리</p>
                <input
                  type="text"
                  name="view"
                  placeholder="카테고리"
                  value="카테고리_1"
                  className="notice_ts notice_tcategory"
                  disabled
                />
              </div>
            </form>
          </section>
          <section className="notice_text">
            <form>
              <textarea
                type="text"
                name="notice_text"
                placeholder="내용"
                id="ta"
                className="notice_ttext"
                disabled
                value={content.text}
              ></textarea>
            </form>
          </section>
          <section className="notice_menu">
            <div className="notice_menu_left">
              <ul>
                <li>
                  이전글
                  <Link
                    to={`/QuestionDetail?view=${paramsIdValue - 1}`}
                    className="prev_notice"
                  >
                    {content.prev}
                  </Link>
                </li>
                <li>
                  다음글
                  <Link
                    to={`/QuestionDetail?view=${paramsIdValue + 1}`}
                    className="next_notice"
                  >
                    {content.next}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="notice_menu_right">
              <ul className="writing_icon_right writing_right_ico">
                <li className="ic_click">
                  <a>
                    <img
                      src="src/images/icon_like.png"
                      alt="icon_like"
                      className="nor_img"
                    />
                    <img
                      src="src/images/icon_like_on.png"
                      alt="icon_like"
                      className="active_img"
                    />
                  </a>
                  <span className="icon_click_num">{content.like}</span>
                </li>
                <div className="notice_share_cove">
                  <ul className="notice_share_box">
                    <li className="copylink">링크 복사</li>
                    <li className="kakaotalk_share">카카오톡 공유</li>
                    <li className="facebook_share">페이스북 공유</li>
                  </ul>
                </div>
                <li className="ic_click notice_shared_icon">
                  <a className="notice_share_btn">
                    <img
                      src="src/images/icon_share.png"
                      alt="icon_share"
                      className="nor_img"
                    />
                    <img
                      src="src/images/message_back.png"
                      alt="message_back"
                      className="active_img"
                    />
                  </a>
                  <a className="icon_click_name">
                    공유<span className="icon_click_num">{content.share}</span>
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default QuestionDetail;
