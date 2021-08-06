import React from "react";
import { useHistory } from "react-router-dom";

const WriteSubmitIsTrue = (props) => {
  const history = useHistory();
  return (
    <div class={props.class}>
      <div class="write_comment_checking_popup">
        <h3 class="write_comment_checking_title">코멘트를 등록했습니다.</h3>
        <div>
          <p>
            <div
              class="comment_checking_btn"
              onClick={() => {
                history.push("/");
              }}
            >
              확인
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WriteSubmitIsTrue;
