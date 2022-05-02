import React from "react";
import "./header.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineCaretDown } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function Header() {
  return (
    <div className="max-width header ">
      <img src="./Zomato_Logo.png" alt="zomato-logo " className="header-logo" />

      <div className="header-right ">
        <div className="header-location-search-container ">
          <div className="location-wraper ">
            <div className="location-icon-name   ">
              <HiOutlineLocationMarker className=" location-icon" />
              <div>Banglore</div>
            </div>

            <AiOutlineCaretDown className="absolute-center" />

            <div className="location-search-seprater"></div>

            <div className="header-searchbar  ">
              <AiOutlineSearch className="search-icon" />
              <input
                placeholder="Search for restaurnt,cusine or dish"
                className="search-input "

              />
            </div>
          </div>
        </div>
        <div className="profile-wraper">
          <AiOutlineUser className="header-profile-image " />
          <span className="header-username"> Sagar </span>
          <MdOutlineKeyboardArrowDown className="absolute-center profile-options-icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
