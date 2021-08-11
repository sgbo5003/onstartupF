import React from "react";
import { useEffect } from "react";
import ContentComponent from "../../components/ContentComponent";
const MypageComment = () => {
  useEffect(() => {
    console.log("commentpage");
  }, []);
  const commentComponentArray = [1, 2, 3, 4, 5, 6];
  return commentComponentArray.map((data) => {
    return (
      <ContentComponent coverclass="mypage_other_comment_view_content_cove" />
    );
  });
};

export default MypageComment;
