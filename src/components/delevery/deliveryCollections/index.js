import React from "react";
import "./deliveryCollection.css";
import Slider from "react-slick";
import NextArrow from "../../common/carousel/nextArrow";
import PrevArrow from "./../../common/carousel/prevArrow";
import DeleveryItem from "./deliveryItem";

const deliveryItem = [
  {
    id: 1,
    title: "Piza",
    cover:
      "https://b.zmtcdn.com/data/pictures/chains/4/43984/97293d96278f57d63c60822cbba7fe6c_o2_featured_v2.jpg",
  },
  {
    id: 2,
    title: "Chines",
    cover:
      "https://b.zmtcdn.com/data/pictures/7/18536527/ef2db7a2c60faa791bfafb410f612cb4_o2_featured_v2.jpg?output-format=webp",
  },
  {
    id: 3,
    title: "Biriyani",
    cover:
      "https://b.zmtcdn.com/data/pictures/chains/5/32835/24df3d7c0bdaea68b48f4fa0e120fcf7_o2_featured_v2.jpg?output-format=webp",
  },
  {
    id: 4,
    title: "McDonald's",
    cover:
      "https://b.zmtcdn.com/data/pictures/chains/9/35079/c0ba9ec0f08684316b2552a8eb5a1ea8_o2_featured_v2.jpg?output-format=webp",
  },
  {
    id: 5,
    title: "Pav Bhaji",
    cover:
      "https://b.zmtcdn.com/data/pictures/4/19607064/0f274544365415d0b333987921023850_o2_featured_v2.jpg",
  },
  {
    id: 6,
    title: "Burger",
    cover:
      "https://b.zmtcdn.com/data/pictures/chains/7/37327/8065982bd1e5b32ea7730a382f7e1d93_o2_featured_v2.jpg",
  },
  {
    id: 7,
    title: "Nort Indian",
    cover:
      "https://b.zmtcdn.com/data/pictures/chains/6/19108556/357eee048bfef6f708d4bebeccbd9cb8_o2_featured_v2.jpg",
  },
];
const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

function DeliveryCollection() {
  return (
    <div className="delivery-collection">
      <div className="max-width">
        <div className="collection-title">Eat what makes you happy</div>
        <Slider {...settings}>
          {deliveryItem.map((item) => {
            return <DeleveryItem item={item} />;
          })}
        </Slider>
      </div>
    </div>
  );
}

export default DeliveryCollection;
