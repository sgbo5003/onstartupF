import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import CarouselSlider from "../../components/CarouselSlider";
import ContentPage from "../../components/Content/ContentPage";
import { useEffect } from "react";
import * as fnc from "../../commonFunc/CommonFunctions";
const Home = () => {
  const getBrowserData = () => {
    fnc.executeQuery({
      url: "action/member/join.php",
      data: {},
      current_url: location.href,
      success: (res) => {
        console.log(res);
      },
    });
  };

  useEffect(() => {
    getBrowserData();
  }, []);

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
