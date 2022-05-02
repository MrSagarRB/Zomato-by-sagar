import React from "react";
import "./collection.css";
import { AiOutlineCaretRight } from "react-icons/ai";
import Slider from "react-slick";
import NextArrow from "../../common/carousel/nextArrow";
import PrevArrow from "./../../common/carousel/prevArrow";

const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

function Collection({ list }) {
  return (
    <div className=" collection-wrapper">
      <div className="max-width collection">
        <div className="collection-title">Collection</div>
        <div className="collection-subtitle-row">
          <div className="collection-subtitle-text">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Mumbai, based on trends
          </div>
          <div className="collection-location">
            <div> All Collections in Mumbai</div>
            <AiOutlineCaretRight className="absolute-center" />
          </div>
        </div>

        <Slider {...settings}>
          {list.map((item) => {
            return (
              <div>
                <div className="collection-cover">
                  <img src={item.cover} className="collection-image" />

                  <div className="gradient-bg"> </div>
                  <div className="collection-card-title">{item.title}</div>
                  <div className="collection-card-subtitle">
                    <div>{item.places}</div>
                    <AiOutlineCaretRight className="absolute-center" />
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Collection;
