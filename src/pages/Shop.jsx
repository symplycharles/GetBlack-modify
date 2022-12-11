import React from "react";
import rectangleImg from "../assets/images/rectangle.png";
import GroupFooter from "../components/atoms/GroupFooter";

function Shop() {
  return (
    <>
      <div className="lg:container mx-auto">
        <div className="mb-10">
          <div>
            <h1 className="font-bold text-xl mt-4 mx-4">Shops near me</h1>
            <h3 className="font-bold mt-2 ml-4">Categories</h3>
          </div>
          <div className="grid place-items-center xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-2 grid-cols-2 mt-4 px-4 w-full">
            <div className="h-60 ">
              <img src={rectangleImg} alt="rectangleImg" className="h-full" />
            </div>
            <div className="h-60">
              <img src={rectangleImg} alt="rectangleImg" className="h-full" />
            </div>
            <div className="h-60">
              <img src={rectangleImg} alt="rectangleImg" className="h-full" />
            </div>
            <div className="h-60">
              <img src={rectangleImg} alt="rectangleImg" className="h-full" />
            </div>
            <div className="h-60">
              <img src={rectangleImg} alt="rectangleImg" className="h-full" />
            </div>
            <div className="h-60">
              <img src={rectangleImg} alt="rectangleImg" className="h-full" />
            </div>
            <div className="h-60">
              <img src={rectangleImg} alt="rectangleImg" className="h-full" />
            </div>
            <div className="h-60">
              <img src={rectangleImg} alt="rectangleImg" className="h-full" />
            </div>
            <div className="h-60">
              <img src={rectangleImg} alt="rectangleImg" className="h-full" />
            </div>
            <div className="h-60">
              <img src={rectangleImg} alt="rectangleImg" className="h-full" />
            </div>
            <div className="h-60">
              <img src={rectangleImg} alt="rectangleImg" className="h-full" />
            </div>
            <div className="h-60">
              <img src={rectangleImg} alt="rectangleImg" className="h-full" />
            </div>
          </div>
        </div>
      </div>
      <GroupFooter />
    </>
  );
}

export default Shop;
