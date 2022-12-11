import React from "react";
import HomeSlider from "../components/organisms/HomeSlider";
import CategoryCard from "../components/organisms/CategoryCard";
// import TrendingCard from "../components/atoms/TrendingCard";
// import FooterSection from "../components/atoms/FooterSection";
// import FooterBar from "../components/atoms/FooterBar";
import FoodCard from "../components/organisms/FoodCard";
import SelectFood from "../components/organisms/selectfood/SelectFood";
import GroupFooter from "../components/atoms/GroupFooter";

import "./home.css"



function Home() {
  return (
    <>
      <div className="container">
      <div className='circle'></div>
        <div className="card-parent">
          <div className="category">
            <CategoryCard />
          </div>
          {/* <div className="w-full h-full md:col-span-2  lg:col-span-3 ">
            <TrendingCard /> 
          </div>   */}
          <div className="foodcard">
            <FoodCard />
          </div>
          <div className="selectfood">
            <SelectFood/>
          </div>
        </div>
      </div>
      <HomeSlider />
      <GroupFooter />
    </>
  );
}

export default Home;
