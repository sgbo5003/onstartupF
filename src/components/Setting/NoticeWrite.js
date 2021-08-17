import React from "react";

const NoticeWrite = () => {
  return (
    <div class="wap write_wap">
      <div class="write_content">
        <div class="write_view">
          <h2 class="write_view_title">글쓰기</h2>
          <section class="write_comment">
            <h2>공지사항</h2>
            <form>
              <input
                type="text"
                name="comment1"
                placeholder="제목"
                class="comment_group comment_write_title write_text_box"
              />
            </form>
          </section>
          <section class="write_comment">
            <form>
              <textarea
                type="text"
                name="comment1"
                placeholder="내용"
                class="coment_write comment_write_text write_text_box"
              ></textarea>
            </form>
          </section>
          <section class="write_comment">
            <h2>
              이미지 추가<span>(선택)</span>
              <a class="detail">
                <img
                  class="detail_img"
                  src="src/images/detaile_click.png"
                  alt="detaile_click.png"
                />
              </a>
            </h2>
            <section class="detail_box">
              <h2 class="hidden">툴팁</h2>
              <p class="detail_info">
                참고 할 URL과
                <br />
                이미지가 있다면 입력해 주세요! URL과 이미지를 입력하면 썸네일과
                함께 표시됩니다.
              </p>
              <span>
                <a class="detail_img_cove">
                  {/* <img
                    class="detail_img_back"
                    src="src/images/back.png"
                    alt="back.png"
                  /> */}
                </a>
              </span>
            </section>
            <div class="filebox">
              <form>
                <input type="file" name="" id="file" />
                <input
                  class="comment_group upload-name comment_file_text write_text_box"
                  placeholder="파일선택"
                  disabled
                />
                <label for="file">이미지 찾기</label>
              </form>
            </div>
          </section>
          {/* <input
            type="submit"
            name="write_submit_off"
            class="write_submit_off"
            value="글쓰기"
            disabled
          /> */}
          <input
            type="submit"
            name="write_submit_on"
            class="write_submit_on"
            value="글쓰기"
          />
        </div>
      </div>
    </div>
  );
};

export default NoticeWrite;
