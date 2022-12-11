import React from "react";

function FoodCategoriesItems({ foodCategory }) {
  return (
    <>
      <div className="card bg-[#F5F5F5] shadow-xl lg:h-[288px] ">
        <figure>
          <img
            src={foodCategory.image}
            alt="puffImg"
            className="w-full h-full lg:w-[250px] lg:h-[180px]"
          />
        </figure>
        <div className="card-body p-2">
          <h2 className="card-title p-2 text-md font-bold py-1 text-sm">
            {foodCategory.foodName}
          </h2>
          <p className="ml-2 text-sm">{foodCategory.numberofItems}</p>
        </div>
      </div>
    </>
  );
}

export default FoodCategoriesItems;
