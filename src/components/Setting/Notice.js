import React from "react";
import { Link, useHistory } from "react-router-dom";

const Notice = () => {
  const history = useHistory();
  const boardList = [
    {
      boardNo: 1,
      boardTitle: "게시글1",
      boardDate: new Date(),
      boardViews: 1,
    },
    {
      boardNo: 2,
      boardTitle: "게시글2",
      boardDate: new Date(),
      boardViews: 1,
    },
    {
      boardNo: 3,
      boardTitle: "게시글3",
      boardDate: new Date(),
      boardViews: 1,
    },
    {
      boardNo: 4,
      boardTitle: "게시글4",
      boardDate: new Date(),
      boardViews: 1,
    },
  ];
  return (
    <div className="wap notice_wap">
      <div className="notice_content">
        <div className="notice_view">
          <h2 className="notice_view_title">
            공지사항<span>새로운 소식들을 확인하세요.</span>
          </h2>
          <section className="notice_con notice_sty">
            <table className="notice_table_list">
              <thead>
                <tr>
                  <th>번호</th>
                  <th>제목</th>
                  <th>작성일</th>
                  <th>조회수</th>
                </tr>
              </thead>
              <tbody className="tbody_num">
                {boardList.map((data) => {
                  return (
                    <tr
                      onClick={() => {
                        history.push("/NoticeDetail");
                      }}
                      onMouseOut=" window.status = '' "
                    >
                      <td className="no_tr_num">{data.boardNo}</td>
                      <td className="no_tr_tit">{data.boardTitle}</td>
                      <td className="no_tr_dat">
                        {data.boardDate.toLocaleDateString()}
                      </td>
                      <td className="no_tr_view">{data.boardViews}</td>
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
              <Link to="/NoticeWrite">글쓰기</Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Notice;
