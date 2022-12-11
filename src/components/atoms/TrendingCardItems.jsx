import React from "react";

function TrendingCardItems({ data }) {
  return (
    <>
      <div className="card bg-[#F5F5F5] shadow-xl lg:h-[280px]">
        <figure>
          <img
            src={data.image}
            alt="puffImg"
            className="w-full h-full lg:w-[250px] lg:h-[180px]"
          />
        </figure>
        <div className="card-body p-2">
          <h2 className="card-title p-2 text-sm font-medium py-1">{data.foodName}</h2>
          <p className="ml-2 text-sm">{data.numberofItemss}</p>
        </div>
      </div>
    </>
  );
}

export default TrendingCardItems;
