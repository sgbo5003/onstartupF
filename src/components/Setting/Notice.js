import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as fnc from "../../commonFunc/CommonFunctions";

const Notice = (props) => {
  //   console.log(props);
  const history = useHistory();
  //   const boardList = [
  //     {
  //       boardNo: 1,
  //       boardTitle: "게시글1",
  //       boardDate: new Date(),
  //       boardViews: 1,
  //     },
  //     {
  //       boardNo: 2,
  //       boardTitle: "게시글2",
  //       boardDate: new Date(),
  //       boardViews: 1,
  //     },
  //     {
  //       boardNo: 3,
  //       boardTitle: "게시글3",
  //       boardDate: new Date(),
  //       boardViews: 1,
  //     },
  //     {
  //       boardNo: 4,
  //       boardTitle: "게시글4",
  //       boardDate: new Date(),
  //       boardViews: 1,
  //     },
  //     {
  //       boardNo: 5,
  //       boardTitle: "게시글5",
  //       boardDate: new Date(),
  //       boardViews: 1,
  //     },
  //     {
  //       boardNo: 6,
  //       boardTitle: "게시글6",
  //       boardDate: new Date(),
  //       boardViews: 1,
  //     },
  //     {
  //       boardNo: 7,
  //       boardTitle: "게시글7",
  //       boardDate: new Date(),
  //       boardViews: 1,
  //     },
  //     {
  //       boardNo: 8,
  //       boardTitle: "게시글8",
  //       boardDate: new Date(),
  //       boardViews: 1,
  //     },
  //     {
  //       boardNo: 9,
  //       boardTitle: "게시글9",
  //       boardDate: new Date(),
  //       boardViews: 1,
  //     },
  //     {
  //       boardNo: 10,
  //       boardTitle: "게시글10",
  //       boardDate: new Date(),
  //       boardViews: 1,
  //     },
  //     {
  //       boardNo: 11,
  //       boardTitle: "게시글11",
  //       boardDate: new Date(),
  //       boardViews: 1,
  //     },
  //     {
  //       boardNo: 12,
  //       boardTitle: "게시글12",
  //       boardDate: new Date(),
  //       boardViews: 1,
  //     },
  //   ];

  const [posts, setPosts] = useState([]); // 전체 데이터

  const getData = () => {
    fnc.executeQuery({
      url: "action/board/notice.php",
      data: {},
      success: (res) => {
        setPosts(res.notice);
      },
    });
    // setPosts(boardList);
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
              {/* {pageNumber.map((data) => {
                return (
                  <a
                    className="paging_number"
                    key={data}
                    onClick={() => paginate(data)}
                  >
                    {data}
                  </a>
                );
              })} */}
              <Link to="/Notice?page=1" className="paging_number">
                1
              </Link>
              <Link to="/Notice?page=2" className="paging_number">
                2
              </Link>
              <Link to="/Notice?page=3" className="paging_number">
                3
              </Link>
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
