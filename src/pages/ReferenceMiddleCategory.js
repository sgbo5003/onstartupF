import React from "react";
import { useHistory } from "react-router-dom";
import ReferenceContent from "../components/ReferenceContent/ReferenceContent";
import ReferenceSidebar from "../components/ReferenceSidebar";

const ReferenceMiddleCategory = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];

  const history = useHistory();

  const onProductClicked = () => {
    history.push("/ReferenceProduct");
  };
  return (
    <>
      <ReferenceSidebar />
      <div className="reference_middlecategory_container">
        <div className="reference_middlecategory_title_container">
          <p className="middle_category_title_main">PDF 교재</p>
          <p className="middle_category_title_sub">중분류</p>
        </div>
        <div className="reference_middlecategory_contentbox">
          {arr.map((data) => {
            return (
              <ReferenceContent
                coinbox=""
                onProductClicked={onProductClicked}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ReferenceMiddleCategory;
