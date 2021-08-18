import React from "react";

const NoticeDetail = () => {
  return (
    <div className="wap notice_wap">
      <div className="notice_content">
        <div className="notice_view">
          <h2 className="notice_view_title">
            공지사항<span>새로운 소식들을 확인하세요.</span>
          </h2>
          <section className="notice_top_bar">
            <form className="notice_title">
              <input
                type="text"
                name="notice_title"
                placeholder="제목"
                value="Lorem ipsum dolor sit amet."
                className="node_input_title"
                disabled
              />
              <div className="notice_ts_group">
                <p>작성자</p>
                <input
                  type="text"
                  name="writer"
                  placeholder="작성자"
                  value="OSU 관리자"
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
                  value="2021-05-11"
                  className="notice_ts notice_tdate"
                  disabled
                />
                <input
                  type="text"
                  name="time"
                  placeholder="시간"
                  value="00:00"
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
                  value="16"
                  className="notice_ts notice_tview"
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
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, dolor
                sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                accusam et justo duo dolores et ea rebum. Stet clita kasd
                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore
              </textarea>
            </form>
          </section>
          <section className="notice_menu">
            <div className="notice_menu_left">
              <ul>
                <li>
                  이전글
                  <a className="prev_notice" href="#">
                    Lorem ipsum dolor sit amet
                  </a>
                </li>
                <li>
                  다음글
                  <a className="next_notice" href="#">
                    Lorem ipsum dolor
                  </a>
                </li>
              </ul>
            </div>
            <div className="notice_menu_right">
              <ul className="writing_icon_right writing_right_ico">
                <li className="ic_click">
                  <a href="#">
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
                  <span className="icon_click_num">0</span>
                </li>
                <div className="notice_share_cove">
                  <ul className="notice_share_box">
                    <li className="copylink">링크 복사</li>
                    <li className="kakaotalk_share">카카오톡 공유</li>
                    <li className="facebook_share">페이스북 공유</li>
                  </ul>
                </div>
                <li className="ic_click notice_shared_icon">
                  <a className="notice_share_btn" href="#">
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
                  <a className="icon_click_name" href="#">
                    공유<span className="icon_click_num">0</span>
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

export default NoticeDetail;
