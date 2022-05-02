import React from "react";
import "./exploreCard.css";
import { FiStar } from "react-icons/fi";

function ExploreCard({ restaurnt }) {
  const name = restaurnt?.info?.name ?? "";
  const coverImg = restaurnt?.info?.image?.url;
  const deliveryTime = restaurnt?.order?.deliveryTime;
  const rating = restaurnt?.info?.rating?.rating_text;
  const approxPrice = restaurnt?.info?.cfo?.text;
  const offers = restaurnt?.bulkOffers ?? [];
  const cusines = restaurnt?.info?.cuisine
    ?.map((item) => item.name)
    .slice(0, 3);
  const bottomContainer = restaurnt?.bottomContainers;
  const goldOff = restaurnt?.gold?.text;
  const proOff = offers.length > 1 ? offers[0].text : null;
  const discount =
    offers.length > 1
      ? offers[1].text
      : offers.length === 1
      ? offers[0].text
      : null;

  return (
    <div className="explore-card cur-point">
      <div className="explore-card-cover">
        <img src={coverImg} alt={name} className=" explore-card-image" />
        <div className="delivery-time"> {deliveryTime}</div>
        {proOff && <div className="pro-off"> {proOff} </div>}
        {goldOff && <div className="gold-off absolute-center"> {goldOff} </div>}
        {discount && (
          <div className="discount absolute-center"> {discount} </div>
        )}
      </div>
      <div className="res-row">
        <div className="res-name">{name}</div>
        {rating && (
          <div className="res-rating absolute-center">
            {rating} <FiStar className="rating-star-icon" />
          </div>
        )}
      </div>
      <div className="res-row">
        {cusines.length && (
          <div className="res-cuisine">
            {" "}
            {cusines.map((item, i) => {
              return (
                <span className="res-cusine-tag">
                  {item} {i !== cusines.length - 1 && ", "}
                </span>
              );
            })}
          </div>
        )}
        {approxPrice && <div className="res-Price"> {approxPrice} </div>}
      </div>
      {bottomContainer.length > 0 && (
        <div>
          <div className="card-seprator"> </div>
          <div className="explore-bottom">
            <img
              src={bottomContainer[0]?.image?.url}
              style={{ height: "18px" }}
              alt={bottomContainer[0].text}
            />
            <div className="res-bottom-text">{bottomContainer[0]?.text}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExploreCard;
