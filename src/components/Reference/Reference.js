import React from "react";
import CarouselSlider from "../Main/CarouselSlider";
import ReferenceContentPage from "./ReferenceContentPage";
import ReferenceSidebar from "./ReferenceSidebar";

const Reference = () => {
  return (
    <>
      <ReferenceSidebar />
      <div className="content">
        <CarouselSlider />
        <ReferenceContentPage />
      </div>
    </>
  );
};

export default Reference;
