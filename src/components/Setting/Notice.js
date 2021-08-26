import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as fnc from "../../commonFunc/CommonFunctions";

const Notice = (props) => {
  const history = useHistory();
  const paramsId = props.location.search.split("=")[1];
  const [posts, setPosts] = useState([]); // 전체 데이터 수
  const postsPerpage = 10; // 한 페이지에서 보여줄 게시글 수
  const pageNumber = []; // 페이징 넘버를 담는 배열
  const [totalPageNum, setTotalPageNum] = useState(0); // 전체 페이지 데이터 수

  for (let i = 1; i <= Math.ceil(totalPageNum / postsPerpage); i++) {
    pageNumber.push(i);
  }

  const getData = () => {
    fnc.executeQuery({
      url: "action/board/notice.php",
      data: {},
      success: (res) => {
        setPosts(res.notice);
        setTotalPageNum(res.total_num);
      },
    });
  };

  useEffect(() => {
    getData();
  }, [location.href]);

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
                {posts.map((post, idx) => {
                  return (
                    <tr
                      onClick={() => {
                        history.push(`/NoticeDetail?view=${post.num}`);
                      }}
                      key={idx}
                    >
                      <td className="no_tr_num">{post.num}</td>
                      <td className="no_tr_tit">{post.title}</td>
                      <td className="no_tr_dat">{post.write_date}</td>
                      <td className="no_tr_view">{post.view}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="no_paging">
              <span className="prev">
                <a className="pasing_arrow">&lt;</a>
              </span>
              {pageNumber.map((data) => {
                return (
                  <Link
                    to={`/Notice?page=${data}`}
                    className={
                      paramsId == data ? "no_paging_active" : "paging_number"
                    }
                    key={data}
                  >
                    {data}
                  </Link>
                );
              })}
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
