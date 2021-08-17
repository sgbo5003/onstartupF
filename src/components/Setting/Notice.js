import React from "react";
import { Link } from "react-router-dom";

const Notice = () => {
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
    <div class="wap notice_wap">
      <div class="notice_content">
        <div class="notice_view">
          <h2 class="notice_view_title">
            공지사항<span>새로운 소식들을 확인하세요.</span>
          </h2>
          <section class="notice_con notice_sty">
            <table class="notice_table_list">
              <thead>
                <tr>
                  <th>번호</th>
                  <th>제목</th>
                  <th>작성일</th>
                  <th>조회수</th>
                </tr>
              </thead>
              <tbody class="tbody_num">
                {boardList.map((data) => {
                  return (
                    <tr
                      onClick=" location.href='notice_detail.html' "
                      onMouseOut=" window.status = '' "
                    >
                      <td class="no_tr_num">{data.boardNo}</td>
                      <td class="no_tr_tit">{data.boardTitle}</td>
                      <td class="no_tr_dat">
                        {data.boardDate.toLocaleDateString()}
                      </td>
                      <td class="no_tr_view">{data.boardViews}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div class="no_paging">
              <span class="prev">
                <a class="pasing_arrow">&lt;</a>
              </span>
              <a class="no_paging_active">1</a>
              <a>2</a>
              <a>3</a>
              <span class="next">
                <a class="pasing_arrow">&gt;</a>
              </span>
            </div>
            <div class="no_write_btn">
              <Link to="/NoticeWrite">글쓰기</Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Notice;
