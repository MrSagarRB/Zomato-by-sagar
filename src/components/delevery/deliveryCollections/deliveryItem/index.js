import React from "react";
import "./deliveryItem.css";

function DeleveryItem({ item }) {

  return (
    <div>
      <div className="delevery-item-cover">
        <img
          src={item.cover}
          className="delevery-item-image cur-point"
          alt={item.title}
        />
      </div>
      <div className="delevery-item-title"> {item.title}</div>
    </div>
  );
}

export default DeleveryItem;
