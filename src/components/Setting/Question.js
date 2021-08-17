import React from "react";
import { Link } from "react-router-dom";

const Question = () => {
  const boardList = [
    {
      boardNo: 1,
      boardWriter: "박상준",
      boardCategory: "카테고리1",
      boardTitle: "게시글1",
      boardDate: new Date(),
    },
    {
      boardNo: 2,
      boardWriter: "홍길동",
      boardCategory: "카테고리2",
      boardTitle: "게시글2",
      boardDate: new Date(),
    },
    {
      boardNo: 3,
      boardWriter: "아무개",
      boardCategory: "카테고리3",
      boardTitle: "게시글3",
      boardDate: new Date(),
    },
    {
      boardNo: 4,
      boardWriter: "세종대왕",
      boardCategory: "카테고리4",
      boardTitle: "게시글4",
      boardDate: new Date(),
    },
  ];
  return (
    <div className="wap fq_wap">
      <div className="fq_content">
        <div className="fq_view">
          <div className="fq_top_bar">
            <h2 className="fq_view_title">
              자주 묻는 질문
              <span>고객님들께서 가장 자주 묻는 질문들을 모았습니다.</span>
            </h2>
            <div className="fq_category_selectbox">
              <select className="fq_category_select">
                <option selected disabled>
                  카테고리 선택
                </option>
                <option>전체보기</option>
                <option>카테고리 (1)</option>
                <option>카테고리 (2)</option>
                <option>카테고리 (3)</option>
              </select>
            </div>
          </div>
          <section className="fq_con fq_sty">
            <table className="fq_table_list">
              <thead>
                <tr>
                  <th>번호</th>
                  <th>카테고리</th>
                  <th>제목</th>
                  <th>작성일</th>
                </tr>
              </thead>
              <tbody className="tbody_num">
                {boardList.map((data) => {
                  return (
                    <tr onMouseOut=" window.status = '' ">
                      <td className="fq_tr_num">{data.boardNo}</td>
                      <td className="fq_tr_ctn">{data.boardCategory}</td>
                      <td className="fq_tr_tit">{data.boardTitle}</td>
                      <td className="fq_tr_tit">
                        {data.boardDate.toLocaleDateString("ko-KR")}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="no_paging">
              <span className="prev">
                <a className="pasing_arrow">&lt;</a>
              </span>
              <a className="no_paging_active">1</a>
              <a>2</a>
              <a>3</a>
              <span className="next">
                <a className="pasing_arrow">&gt;</a>
              </span>
            </div>
            <div className="no_write_btn">
              <Link to="/QuestionWrite">글쓰기</Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Question;
