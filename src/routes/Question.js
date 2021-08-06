import React from "react";

const Question = () => {
  return (
    <div class="wap fq_wap">
      <div class="fq_content">
        <div class="fq_view">
          <div class="fq_top_bar">
            <h2 class="fq_view_title">
              자주 묻는 질문
              <span>고객님들께서 가장 자주 묻는 질문들을 모았습니다.</span>
            </h2>
            <div class="fq_category_selectbox">
              <select class="fq_category_select">
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
          <section class="fq_con fq_sty">
            <table class="fq_table_list">
              <thead>
                <tr>
                  <th>번호</th>
                  <th>카테고리</th>
                  <th>제목</th>
                </tr>
              </thead>
              <tbody class="tbody_num">
                <tr onMouseOut=" window.status = '' ">
                  <td class="fq_tr_num">1</td>
                  <td class="fq_tr_ctn">카테고리명</td>
                  <td class="fq_tr_tit">Lorem ipsum dolor sit amet</td>
                </tr>
                <tr onMouseOut=" window.status = '' ">
                  <td class="fq_tr_num">2</td>
                  <td class="fq_tr_ctn">카테고리명</td>
                  <td class="fq_tr_tit">Lorem ipsum dolor sit amet</td>
                </tr>
                <tr onMouseOut=" window.status = '' ">
                  <td class="fq_tr_num">3</td>
                  <td class="fq_tr_ctn">카테고리명</td>
                  <td class="fq_tr_tit">Lorem ipsum dolor sit amet</td>
                </tr>
                <tr onMouseOut=" window.status = '' ">
                  <td class="fq_tr_num">4</td>
                  <td class="fq_tr_ctn">카테고리명</td>
                  <td class="fq_tr_tit">Lorem ipsum dolor sit amet</td>
                </tr>
                <tr onMouseOut=" window.status = '' ">
                  <td class="fq_tr_num">5</td>
                  <td class="fq_tr_ctn">카테고리명</td>
                  <td class="fq_tr_tit">Lorem ipsum dolor sit amet</td>
                </tr>
                <tr onMouseOut=" window.status = '' ">
                  <td class="fq_tr_num">6</td>
                  <td class="fq_tr_ctn">카테고리명</td>
                  <td class="fq_tr_tit">Lorem ipsum dolor sit amet</td>
                </tr>
                <tr onMouseOut=" window.status = '' ">
                  <td class="fq_tr_num">7</td>
                  <td class="fq_tr_ctn">카테고리명</td>
                  <td class="fq_tr_tit">Lorem ipsum dolor sit amet</td>
                </tr>
                <tr onMouseOut=" window.status = '' ">
                  <td class="fq_tr_num">8</td>
                  <td class="fq_tr_ctn">카테고리명</td>
                  <td class="fq_tr_tit">Lorem ipsum dolor sit amet</td>
                </tr>
                <tr onMouseOut=" window.status = '' ">
                  <td class="fq_tr_num">9</td>
                  <td class="fq_tr_ctn">카테고리명</td>
                  <td class="fq_tr_tit">Lorem ipsum dolor sit amet</td>
                </tr>
                <tr onMouseOut=" window.status = '' ">
                  <td class="fq_tr_num">10</td>
                  <td class="fq_tr_ctn">카테고리명</td>
                  <td class="fq_tr_tit">Lorem ipsum dolor sit amet</td>
                </tr>
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
              <a>글쓰기</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Question;
