import React from "react";
import "./nightlife.css";
import Filters from "../common/filters";
import { GrSort } from "react-icons/gr";
import { BiSort } from "react-icons/bi";
import Collection from "../common/collection";
import ExploreSection from "../common/exploreSection";
import { diningOut } from "../../data/diningOutData";

const nightLifeFilters = [
  {
    id: 1,
    icon: <GrSort className="absolute-center" />,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },

  {
    id: 3,
    title: "Safe & Hyginic",
  },

  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delevery Time",
    icon: <BiSort className="absolute-center" />,
  },
];
 
const nightList= diningOut;


const collectionList = [
  {
    id: "1",
    title: "Microbreweries",
    cover:
      "https://b.zmtcdn.com/data/collections/6ef572662529fbe547628e6471d49bc0_1647242535.jpg",
    places: "11 places",
  },
  {
    id: "2",
    title: " Where's The Party? ",
    cover:
      "https://b.zmtcdn.com/data/collections/4c645d68d0ad4c624abab81374c8997c_1582106595.jpg",
    places: "34 places",
  },
  {
    id: "3",
    title: "Happy Hours",
    cover:
      "https://b.zmtcdn.com/data/collections/e115f03b956656abde558d69810a9c9c_1647244634.jpg",
    places: "30 places",
  },
  {
    id: "4",
    title: "Bear in a Bar",
    cover:
      "https://b.zmtcdn.com/data/collections/5a797771e7802af5b8c3a3dbcdadcac4_1647245603.jpg",
    places: "30 places",
  },
  {
    id: "5",
    title: "Gurmeet Pizza",
    cover:
      "https://b.zmtcdn.com/data/collections/f6e7f7d903d6499e1420d755ddc0ab11_1647238882.jpg",
    places: "23 places",
  },
  {
    id: "6",
    title: "Tranding this week",
    cover:
      "https://b.zmtcdn.com/data/collections/f60eb469dbcdadaaa48c8be4f5ba48b3_1646040548.png",
    places: "35 places",
  },
  {
    id: "7",
    title: "Great Buffets",
    cover:
      "https://b.zmtcdn.com/data/collections/1c0daad79bed143d6a59f67efb6fe196_1535355063.jpg",
    places: "7 places",
  },
  {
    id: "8",
    title: "Work Friendly Places",
    cover:
      "https://b.zmtcdn.com/data/collections/174480faee1a4a2c0f0fdd82cac5d8a5_1647240902.jpg",
    places: "32 places",
  },
  {
    id: "9",
    title: "Live Cricket Screening",
    cover:
      "https://b.zmtcdn.com/data/collections/e2ceb701e81a8113eab9627069f6f6bf_1649144970.jpg",
    places: "28 places",
  },
];

function Nightlife() {
  return (
    <div>
      <Collection list={collectionList} />
      <div className="max-width">
        <Filters filtersList={nightLifeFilters} />
      </div>
      <ExploreSection  list={nightList}/>
    </div>
  );
}

export default Nightlife;
