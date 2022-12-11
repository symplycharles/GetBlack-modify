import React from "react";
import { Link } from "react-router-dom";
const imageUrl =
  "https://res.cloudinary.com/eworldtech/image/upload/c_scale,w_1024/v1661538897/getBlack/bruno-kelzer-LvySG1hvuzI-unsplash_bawbyw.jpg";
function VendorsPage() {
  return (
    <div
      style={{ background: `url(${imageUrl}) center center / cover no-repeat` }}
      className="vendors-img"
    >
      <div className="container mx-auto p-4">
        <div className="flex justify-start items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 mt-10 xl:mt-40">
            <h1 className="text-2xl lg:text-4xl xl:text-5xl font-extrabold text-black">
              Reach new customers and get more orders with GetBlack.
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="mt-4 w-[200px]">
            <Link
              to="/vendor-register"
              className="btn bg-[#FFD700] hover:bg-[#52CD8B] border-none text-black p-2 md:p-3 font-bold uppercase text-md rounded-lg w-full"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VendorsPage;
