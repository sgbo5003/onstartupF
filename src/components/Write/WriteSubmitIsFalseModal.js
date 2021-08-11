import React from "react";
const WriteSubmitIsFalse = (props) => {
  return (
    <div className={props.classOnOff}>
      <div className="write_comment_checking_fail_popup">
        <h3 className="write_comment_checking_fail_title">
          코멘트 등록에 실패했습니다.
        </h3>
        <div>
          <div>
            <a
              className="comment_checking_fail_btn"
              onClick={props.onSubmitFalseModal}
            >
              확인
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteSubmitIsFalse;
