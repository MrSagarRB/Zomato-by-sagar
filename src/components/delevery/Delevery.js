import React from "react";
import Filters from "../common/filters";
import "./delevery.css";
import { GrSort } from "react-icons/gr";
import { BiSort } from "react-icons/bi";
import DeliveryCollection from "./deliveryCollections";
import TopBrands from './topBrands/index';
import ExploreSection from "../common/exploreSection/index"
import { restaurants } from './../../data/restaurants';


const deliveryFilters = [
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

const restaurantsList= restaurants;



function Delevery() {
  return (
    <div>
      <div className="max-width">
        <Filters filtersList={deliveryFilters} />
      </div>
      <DeliveryCollection />
      <TopBrands />
      <ExploreSection list={restaurantsList} collectionName="Delivery Restorunt In Mumbai"/>
    </div>
  );
}

export default Delevery;
