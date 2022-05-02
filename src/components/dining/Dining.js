import React from "react";
import Collection from "../common/collection";
import "./dinning.css";
import Filters from "../common/filters";
import { GrSort } from "react-icons/gr";
import { BiSort } from "react-icons/bi";
import { diningOut } from "./../../data/diningOutData";
import ExploreSection from "../common/exploreSection";

const collectinList = [
  {
    id: "1",
    title: "Live Cricket Screening",
    cover:
      "https://b.zmtcdn.com/data/collections/e2ceb701e81a8113eab9627069f6f6bf_1649144970.jpg",
    places: "12 places",
  },
  {
    id: "2",
    title: "Ramdan Specials",
    cover:
      "https://b.zmtcdn.com/data/collections/15242b397d79d3498922b4779231c850_1555421190.jpg",
    places: "18 places",
  },
  {
    id: "3",
    title: "Newly Opened",
    cover:
      "https://b.zmtcdn.com/data/collections/031c2dd47d839ff2bf98dbb66147ab4f_1648708807.jpg",
    places: "16 places",
  },
  {
    id: "4",
    title: "Best of Mumbai",
    cover:
      "https://b.zmtcdn.com/data/collections/28d243a9d5e5874fefa0f058f28555dd_1615460077.jpg",
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

const diningFilters = [
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

const diningOutData = diningOut;

function Dining() {
  return (
    <div>
      <Collection list={collectinList} />
      <div className="max-width">
        <Filters filtersList={diningFilters} />
      </div>

      <ExploreSection
        list={diningOutData}
        collectionName={"Dine-Out Restaurants in Mumbai"}
      />
    </div>
  );
}

export default Dining;
