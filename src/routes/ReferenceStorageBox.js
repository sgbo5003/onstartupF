import React from "react";
import ReferenceContent from "../components/ReferenceContent/ReferenceContent";
import ReferenceSidebar from "../components/ReferenceSidebar";

const ReferenceStorageBox = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <ReferenceSidebar />
      <div className="reference_storagebox_content">
        {arr.map((data) => {
          return (
            <ReferenceContent coinbox="reference_content_content_bottom_container_coinbox" />
          );
        })}
      </div>
    </>
  );
};

export default ReferenceStorageBox;
