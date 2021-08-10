import React from "react";
import CarouselSlider from "../../components/CarouselSlider";
import ReferenceContentPage from "../../components/Reference/ReferenceContentPage";
import ReferenceSidebar from "../../components/ReferenceSidebar";

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
