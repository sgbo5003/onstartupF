import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as fnc from "../../commonFunc/CommonFunctions";

const Question = (props) => {
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
      url: "action/board/faq.php",
      data: {},
      success: (res) => {
        setPosts(res.faq);
        setTotalPageNum(res.total_num);
      },
    });
  };

  useEffect(() => {
    getData();
  }, [location.href]);

  const [categorySelected, setCategorySelected] = useState("");

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
              <select
                className="fq_category_select"
                onChange={(e) => {
                  console.log(e.target.value);
                  setCategorySelected(e.target.value);
                }}
              >
                <option selected disabled>
                  카테고리 선택
                </option>
                <option>전체보기</option>
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
                </tr>
              </thead>
              <tbody className="tbody_num">
                {posts.map((post, idx) => {
                  return (
                    <tr
                      onClick={() => {
                        history.push(`/QuestionDetail?view=${post.faq_num}`);
                      }}
                      key={idx}
                    >
                      <td className="no_tr_num">{post.faq_num}</td>
                      <td className="no_tr_tit">카테고리{post.faq_num}</td>
                      <td className="no_tr_view">{post.faq_title}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="no_paging">
              <span className="prev">
                <a className="pasing_arrow">&lt;</a>
              </span>
              {/* <a className="no_paging_active">1</a>
              <a>2</a>
              <a>3</a>
               */}
              {pageNumber.map((data) => {
                return (
                  <Link
                    to={`/Question?page=${data}`}
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
              <Link to="/QuestionWrite">글쓰기</Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Question;
