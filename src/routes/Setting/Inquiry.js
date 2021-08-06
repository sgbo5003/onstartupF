import React, { useState } from "react";
import questionImg from "../../images/question_tab_btn.png";
import emailCheckedImg from "../../images/email_checked.png";
import emailCheckImg from "../../images/email_check.png";
import selectBackImg from "../../images/select_back.png";
import { Link } from "react-router-dom";

const inquiry = () => {
  const [emailChecked, setEmailChecked] = useState(false);

  const onEmailCheckHandler = () => {
    setEmailChecked(!emailChecked);
  };
  return (
    <div className="wap inquiry_wap">
      <div className="inquiry_content">
        <div className="inquiry_view">
          <h2 className="inquiry_view_title">문의하기</h2>
          <section className="inquiry_comment inq_sty">
            <div className="inq_que_gruop">
              <h2>자주 묻는 질문</h2>
              <Link to="/Question" className="question_tab">
                <img className="question_tab_img" src={questionImg} />
              </Link>
            </div>
          </section>
          <section className="inquiry_comment2 inq_sty">
            <div className="inq_que_gruop">
              <h2 className="inq_title_wap">일반 문의</h2>
              <form className="inq_form">
                <input
                  type="email"
                  name="checked_email"
                  placeholder="이메일 주소"
                  maxlength="20"
                  className="comment_inquiry_group inq_email_text inq_text_checked inquiry_text_box"
                />
                <div
                  id="error_mail"
                  className="result-email result-check"
                ></div>
              </form>
            </div>
            <div className="inq_que_group inq_select_group">
              <form className="inq_form">
                <input
                  type="text"
                  name="comment_select"
                  placeholder="질문 유형 선택"
                  disabled
                  className="comment_inquiry_group inq_select_text inq_text_checked inquiry_text_box"
                />
                <a className="comment_select_img_cove">
                  <img
                    className="comment_select_img"
                    src={selectBackImg}
                    alt="select_back.png"
                  />
                </a>
              </form>
            </div>
            <div className="inq_que_group">
              <form className="inq_form_write">
                <textarea
                  type="text"
                  name="checked_write"
                  placeholder="내용"
                  className="coment_inquiry inq_write_text inq_text_checked inquiry_text_box"
                ></textarea>
                <div
                  id="error_write"
                  className="result-write result-check"
                ></div>
              </form>
            </div>
          </section>
          <section className="inquiry_comment3">
            <form className="inq_check_email">
              <a className="email_check_group">
                <img
                  className={`email_check_${
                    emailChecked ? "" : "off"
                  } email_check_box`}
                  src={emailChecked ? emailCheckedImg : emailCheckImg}
                  alt="email_check"
                  onClick={onEmailCheckHandler}
                />
                <input
                  className="email_check_val"
                  type="text"
                  value=""
                  disabled
                />
              </a>
              <p className="inq_text">
                이메일 정보 제공 동의
                <br />
                <span>
                  보내주신 질문에 답변드리기 위해 이메일 정보 제공에 동의해
                  주시기 바랍니다.
                </span>
              </p>
            </form>
          </section>
          <input
            type="submit"
            name="inq_submit_off"
            className="inq_submit_off"
            value="문의글 보내기"
            disabled
          />
          <input
            type="submit"
            name="inq_submit_on"
            className="inq_submit_on"
            value="문의글 보내기"
          />
        </div>
      </div>
    </div>
  );
};

export default inquiry;
