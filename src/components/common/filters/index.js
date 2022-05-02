import React from "react";
import FilterItem from "./filterItem";
import "./filters.css";

function Filters({ filtersList }) {
  return (
    <div className="filters">
      {filtersList &&
        filtersList.map((filter) => {
          return (
            <div>
              <FilterItem filter={filter} key={filter.id} />{" "}
            </div>
          );
        })}
    </div>
  );
}

export default Filters;
