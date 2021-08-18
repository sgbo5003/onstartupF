import React from "react";
const WritePortfolioModal = (props) => {
  const { setPortfolioModalOn } = props;
  const onClickButton = () => {
    setPortfolioModalOn(false);
  };
  return (
    <div className="write_comment_popup_cove_on">
      <div className="write_portfolio_modal_popup">
        <h3 className="write_comment_title">
          포트폴리오 등록 시에
          <br /> 마이페이지 > 포트폴리오에 등록됩니다.
        </h3>
        <div>
          <p>
            <a
              className="comment_write_btn comment_write_regi"
              onClick={onClickButton}
            >
              확인
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WritePortfolioModal;
