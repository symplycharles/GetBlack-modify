import React from "react";
import { Link } from 'react-router-dom' 

import notfoundimg from  "../assets/images/not-found.png";

function NotFound() {
  return (
    <>
      <div className="2xl:container mx-auto">
        <div className="grid grid-cols-1 gap-2 mb-10 mx-4 pt-4">
          <Link to="/" className="btn btn-success mt-5 w-[200px] bg-green-400 text-white hover:bg-green-400 hover:text-white">
            Home Page
          </Link>
          <div  className="w-full h-full">
          <img
             src={notfoundimg}
             className="w-full h-full"
             alt=''
          />
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
