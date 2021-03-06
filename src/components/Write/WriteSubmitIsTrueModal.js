import React from "react";
import { useHistory } from "react-router-dom";

const WriteSubmitIsTrue = (props) => {
  const history = useHistory();
  return (
    <div className={props.classOnOff}>
      <div className="write_comment_checking_popup">
        <h3 className="write_comment_checking_title">코멘트를 등록했습니다.</h3>
        <div>
          <div>
            <div
              className="comment_checking_btn"
              onClick={() => {
                history.push("/");
              }}
            >
              확인
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteSubmitIsTrue;
