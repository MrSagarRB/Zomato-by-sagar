import React from "react";
import "./topBrands.css";
import NextArrow from "../../common/carousel/nextArrow";
import PrevArrow from "./../../common/carousel/prevArrow";
import Slider from "react-slick";

const brandList = [
  {
    id: "1",
    logo: "https://b.zmtcdn.com/data/brand_creatives/logos/0e6f4a6a6d54c88d548abaa04a0227bc_1625164827.png",
    title: "McDonald's",
    time:"50 min"
  },
  {
    id: "2",
    logo: "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252779.png",
    title: "Domino's Pizza",
    time:"30 min"
  },
  {
    id: "3",
    logo: "https://b.zmtcdn.com/data/brand_creatives/logos/d919948baa416a7dc8f85ab7d5db05c3_1611383508.png",
    title: "Subway",
    time:"20 min"
  },
  {
    id: "4",
    logo: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188211.png",
    title: "Burger King",
    time:"30 min"
  },

  {
    id: "5",
    logo: "https://b.zmtcdn.com/data/brand_creatives/logos/144bce4c7101359f0c0b54b8fc761a6f_1648017911.png",
    title: "La Pino'z Pizza",  
     time:"45 min"
  },

  {
    id: "6",
    logo: "https://b.zmtcdn.com/data/brand_creatives/logos/f38a3c7db2e3a79f97de3336de685e11_1583993741.png",
    title: "NIC - Natural Ice Creams",
    time:"35 min"
  },

  {
    id: "7",
    logo: "https://b.zmtcdn.com/data/brand_creatives/logos/11f0a050068db77b5b959dd97cc11965_1644900886.png",
    title: "Natural Ice Cream's",
    time:"45 min"
  },
  {
    id: "8",
    logo: "https://b.zmtcdn.com/data/brand_creatives/logos/9c390005a3b36e2f209b5868d536973f_1639679267.png",
    title: "Meraki",
    time:"60 min"
  },
];

const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

function TopBrands() {
  return <div className="top-brands max-width">
<div className="collection-title">Top brands for you  </div>
<Slider {...settings} >
{
  brandList.map((brands)=>{
    return <div>
      <div className="top-brands-cover"> 
      <img src={brands.logo}  className="top-brands-image" alt={brands.title}/>
      </div>
    </div>
  })
}
</Slider>
  </div>;
}

export default TopBrands;
