import React from "react";
import ContentComponent from "../components/ContentComponent";
import Sidebar from "../components/Sidebar";

const SaveWrite = () => {
  const arr = [1, 2, 3, 4];
  return (
    <>
      <Sidebar />
      <div className="content_savewrite">
        <h2 className="savewrite_title_container">저장글</h2>
        <div className="savewrite_content_container">
          {arr.map((data) => {
            return (
              <ContentComponent
                name="닉네임"
                belong="소속"
                title="title"
                text="text"
                updateDate="2021-08-04"
                comment="댓글"
                likeNum="1"
                commentNum="2"
                shareNum="3"
                saveNum="4"
                coverclass="middle_category_content_home_tag_cove"
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SaveWrite;
