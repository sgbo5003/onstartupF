import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
import House from "@material-ui/icons/Home";
import "../css/carousel.css";
import squareImg from "../images/square400.png";
import rightArrowImg from "../images/home_slide_right.png";
import leftArrowImg from "../images/home_slide_left.png";

const CarouselSlider = () => {
  const items = [
    {
      name: "image_1",
      description: "첫번째 이미지",
      src: squareImg,
    },
    {
      name: "image_2",
      description: "두번째 이미지",
      src: squareImg,
    },
    {
      name: "image_3",
      description: "세번째 이미지",
      src: squareImg,
    },
    {
      name: "image_4",
      description: "네번째 이미지",
      src: squareImg,
    },
  ];
  return (
    <div className="home_slide_cove">
      <Carousel
        className="carousel"
        NextIcon={
          <img
            src="src/images/home_slide_right.png"
            style={{ height: "30px" }}
            alt="오른쪽 화살표"
          />
        }
        PrevIcon={
          <img
            src="src/images/home_slide_left.png"
            style={{ height: "30px" }}
            alt="왼쪽 화살표"
          />
        }
        navButtonsAlwaysVisible="true"
        navButtonsProps={{
          className: "carousel_btn",
          style: { backgroundColor: "transparent" },
        }}
        animation="slide"
        swipe="true"
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

function Item(props) {
  return (
    <Paper>
      <img src={props.item.src} className="carousel_item" />
    </Paper>
  );
}

export default CarouselSlider;
