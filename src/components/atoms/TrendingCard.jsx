import React from "react";
import { recentData } from "../../data/recentData";
import TrendingCardItems from "./TrendingCardItems";

function TrendingCard() {
  return (
    <>
      <h2 className="font-bold text-xl ml-4 my-2">Today's Pick</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 place-items-center">
        {recentData.map((data) => (
          <TrendingCardItems key={data.id} data={data} />
        ))}
      </div>
    </>
  );
}

export default TrendingCard;
