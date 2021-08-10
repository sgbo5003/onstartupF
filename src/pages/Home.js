import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import CarouselSlider from "../components/CarouselSlider";
import ContentPage from "../components/Content/ContentPage";
const Home = () => {
  return (
    <>
      <Sidebar />
      <div className="content">
        <CarouselSlider />
        <ContentPage />
      </div>
    </>
  );
};

export default Home;
