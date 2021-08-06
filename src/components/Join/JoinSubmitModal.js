import React from "react";
import clapImg from "../../images/clap.png";

const JoinSubmitModal = (props) => {
  // join_member_qna.php => qna 페이지
  return (
    <div className={props.class}>
      <div className="join_member_checked_popup">
        <h3 className="join_member_checked_title">
          가입을 축하합니다
          <img src={clapImg} alt="clap" />
        </h3>
        <p className="join_member_checked_text">
          더 좋은 정보를 추천해드리기 위해
          <br />
          2개의 Q&A를 부탁드려요!
        </p>
        <div className="join_member_checked_qna_btn_cove">
          <p>
            <a
              className="join_member_checked_qna_btn"
              onClick={props.onJoinSubmitQnaModal}
            >
              확인
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default JoinSubmitModal;
