import React from "react";
import ExploreCard from "./exploreCard";
import "./exploreSection.css";

function ExploreSection({ list, collectionName }) {
  return (
    <div className="max-width explore-Section ">
      <div className="collection-title">{collectionName}</div>
      <div className="explore-grid">
        {list.map((restaurnt) => {
          return <ExploreCard restaurnt={restaurnt} />;
        })}
      </div>
    </div>
  );
}

export default ExploreSection;
