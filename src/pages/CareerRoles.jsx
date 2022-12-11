import React from "react";
// import { Link } from "react-router-dom";
const imageUrl =
  "https://res.cloudinary.com/dirwn9yno/image/upload/v1664383650/getblack/istockphoto-1299276274-612x612_n5stan.jpg";
  
function CareerRoles() {
  return (
    <div
      style={{ background: `url(${imageUrl}) center center / cover no-repeat` }}
      className="vendors-img"
    >
    
      <div className="container mx-auto p-4">
        <div className="flex justify-start items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 mt-10 xl:mt-40">
            <h1 className="text-2xl lg:text-4xl xl:text-5xl font-extrabold text-">
              Available Roles
            </h1>
          </div>
        </div>
      </div>

 
    </div>
  
  );
}

export default CareerRoles;
