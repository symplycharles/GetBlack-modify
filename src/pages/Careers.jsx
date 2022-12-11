import React from "react";
import { Link } from "react-router-dom";
import doneIcon from "../assets/images/done-icon.png";
import ownersIcon from "../assets/images/owners-icon.png";
import playhardIcon from "../assets/images/playhard-icon.png";

const imageUrl =
  "https://res.cloudinary.com/dirwn9yno/image/upload/v1664379811/getblack/istockphoto-1167270974-612x612_kycpgo.jpg";
  
function Careers() {
  return (
    <div
      style={{ background: `url(${imageUrl}) center center / cover no-repeat` }}
      className="vendors-img"
    >
      <div>
        <header className="text-center flex flex-col justify-center items-center">
          <h1 className="my-4 font-extrabold text-4xl text-white">
           Join Our Team
          </h1>
        <p className="text-md text-white">
        GetBlack is revolutionalizing the way African goods and products are been showcased to the world. 
        </p>
        <p className="text-md text-white">
        We are making it easy to manage your sales and deliver to your desired location.
        </p>
        </header>
      </div>

      <div className="container mx-auto p-4">
        <div className="flex justify-start items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 mt-10 xl:mt-40">
            <h1 className="text-2xl lg:text-4xl xl:text-5xl font-extrabold text-white">
              Ready for the next adventure of your life?
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="mt-4 w-[200px]">
            <Link
              to="/career-roles"
              className="btn bg-[#FFD700] hover:bg-[#52CD8B] border-none text-black p-2 md:p-3 font-bold uppercase text-md rounded-lg w-full"
            >
              View all open roles
            </Link>
          </div>
        </div>
      </div>


      <br />
      <br />
      <br />

      <div className="container mx-auto relative z-30">
        <div className="grid place-items-center gap-2 mx-4">
          <header className="text-center flex flex-col justify-center items-center">
            <h1 className="my-4 font-extrabold text-4xl text-black">
              Why GetBlack?
            </h1>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full max-w-2xl">
            <div className="bg-[#D9D9D9] py-12 px-2 flex flex-col justify-center rounded-lg">
              <h3 className="font-bold text-center">Timely</h3>
              <p className="text-sm">
               Getting it done smartly, quickly and at the right time is what strengthens us to work harder as a team and also focus on what matters.
              </p>
              <img src="https://res.cloudinary.com/dirwn9yno/image/upload/v1667828638/getblack/timely-modified_vwkkjp.png" alt="" />
            </div>

            <div className="bg-[#D9D9D9] py-12 px-4 flex flex-col justify-center rounded-lg">
              <h3 className="font-bold text-left">Transform</h3>
              <p className="text-sm">
                We at GetBlack support and build a vibrant and effective workplace through mentoring, consultancy and training which helps us make a positive impact on the way we work and the world we live in..
              </p>
              <img src="https://res.cloudinary.com/dirwn9yno/image/upload/v1667828638/getblack/Transform_i2mkit.png" alt="" />
            </div>

            <div className="bg-[#D9D9D9] py-12 px-4 flex flex-col justify-center rounded-lg">
              <h3 className="font-bold text-left">Thrive</h3>
              <p className="text-sm">
              We grow strong and healthy to attain a profitable standard by reaching customers first and having the opportunity to continuously learn and grow.
              </p>
              <img src="https://res.cloudinary.com/dirwn9yno/image/upload/v1667828639/getblack/Thrive_a0s6zb.png" alt="" />
            </div>

            <div className="bg-[#D9D9D9] py-12 px-4 flex flex-col justify-center rounded-lg">
              <h3 className="font-bold text-left">Team Spirit</h3>
              <p className="text-sm">
                We work together and think big, solving difficult situations by sharing common goals and expectations. We hang together as a team when we spend time developing and having fun.</p>
              <img src="https://res.cloudinary.com/dirwn9yno/image/upload/v1667828638/getblack/Team_Spirit_gdl4mu.png" alt="" />
            </div>

          </div>
        </div>

        <br />
        <br />


        <div className="grid place-items-center gap-2 mx-4">
          <header className="text-center flex flex-col justify-center items-center">
            <h1 className="my-4 font-extrabold text-4xl text-black">
              How we work?
            </h1>
          </header>
        </div>

        <section className="min-h-full mx-4">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         <div className="col-span-1 md:col-span-2">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
             <div className="p-4">
               <img src={doneIcon} alt="doneIcon" className="w-80" />
               <h3 className="font-bold my-4">We get the work done!</h3>
           <p>
            We aim to put a positive and long-lasting impact on the world by going over and beyond to make sure our customer's needs are met and they are satisfied.
           </p>
              </div>
           <div className="p-4">
             <img src={ownersIcon} alt="ownersIcon" className="w-80" />
               <h3 className="font-bold my-4">We are Owners!</h3>
               <p>
               We help others and are willing to take on additional tasks to support not just only ourselves but the whole company in achieving success.
               </p>
             </div>
              <div className="p-4">
              <img src={playhardIcon} alt="playIcon" className="w-80" />
                <h3 className="font-bold my-4">We play hard!</h3>
                 <p>
                 In a world where everyone seems to be busy, we try to have a good work-life balance and prioritise both professional growth and personal enjoyment which helps us make an impact on the world at large.
                </p>
              </div>
            
            </div>
          </div>
         </div>
        </section>
        
        <br />
        <br />


        <section className="min-h-full mx-4">
        <div className="bg-[#D9D9D9] py-12 px-4 flex flex-col justify-center rounded-lg">
         <p className="text-sm">Founder and CEO</p>
        <br />
  
        <h3 className="font-bold text-left"> 
         "Over the past few years, Africans in the diaspora have been faced with extreme difficulty in purchasing or selling their traditional products especially online and also getting it delivered successfully to them".
        </h3>
        <br />
        <p className="text-sm">
        GetBlack's mission is to assist people by making an impact that matters.
        </p>
        </div>
        </section>
         
        <br />
        <br />

      
        <div className="flex justify-center items-center gap-2 text-center pb-4 text-sm">
          <p className="hover:underline">
            <Link to="/">© GetBlack</Link>
          </p>
          <p className="hover:underline">
            <Link to="/contact">Contact</Link>
          </p>
          <p className="hover:underline">
            <Link to="/privacy">Privacy & terms</Link>
          </p>
        </div>
    


      </div>

    </div>
  
  
  );
}

export default Careers;
