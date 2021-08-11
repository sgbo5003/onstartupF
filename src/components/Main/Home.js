import React from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Main/Sidebar";
import CarouselSlider from "../../components/Main/CarouselSlider";
import ContentPage from "../../components/Main/ContentPage";
import { useEffect } from "react";
import * as fnc from "../../commonFunc/CommonFunctions";
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
