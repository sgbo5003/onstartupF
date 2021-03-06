import React from "react";
const WriteConfirmModal = (props) => {
  return (
    <div className={props.classOnOff}>
      <div className="write_comment_popup">
        <h3 className="write_comment_title">코멘트를 등록하시겠습니까?</h3>
        <div>
          <p>
            <a
              className="comment_write_btn comment_write_back"
              onClick={props.onConfirmModal}
            >
              취소하기
            </a>
          </p>
          <p>
            <a
              className="comment_write_btn comment_write_regi"
              onClick={props.onSubmitModal}
            >
              등록하기
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WriteConfirmModal;
