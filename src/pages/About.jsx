import React from "react";
import soundIcon from "../assets/images/sound-icon.png";
import handShake from "../assets/images/hand-shake-icon.png";
import improvementIcon from "../assets/images/improvement-icon.png";
import speedIcon from "../assets/images/speed-icon.png";
// import aboutusimg from "../assets/images/about-us.png";


function About() {
  return (
    
    <div className="container mx-auto relative z-10">
    <div className="grid place-items-center gap-2 mx-4">
      <header className="text-center flex flex-col justify-center items-center">
        <h1 className="my-4 font-extrabold text-4xl">
        About Us 
        </h1>
        <p className="mb-3 text-lg md:text-3xl mt-6 mx-4">
           We are not just another Start-Up in the ecosystem.
        </p>
        <p className="mb-3 text-lg md:text-3xl mt-6 mx-4">
            At GetBlack, our talented teams keeps culture and creativity at the heart of
           everything we do by making an impact that matters to our clients and
            the GetBlack community at large.
        </p>
      </header>
   
      <section className="mt-2 md:mt-6 min-h-full">
            <div className="grid place-items-center gap-4 mx-1 md:mx-4 w-full">
              <img
                src="https://res.cloudinary.com/dfd3gkioi/image/upload/c_scale,w_700/v1659949603/AboutUs_jryd8f.jpg"
                alt=""
                className="w-full h-full"
              />
            </div>
      </section>        

    
      <section className="min-h-full mx-4">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="col-span-1">
           <h1 className="text-3xl md:text-6xl font-semibold">
              Our Company Values
            </h1>
           </div>
         <div className="col-span-1 md:col-span-2">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
             <div className="p-4">
               <img src={soundIcon} alt="soundIcon" className="w-10" />
               <h3 className="font-bold my-4">Transparency</h3>
           <p>Openness with our team & clients.</p>
              </div>
           <div className="p-4">
             <img src={handShake} alt="soundIcon" className="w-10" />
               <h3 className="font-bold my-4">Commitment</h3>
               <p>
                  Our word and hard work over everything else. Our clients and
                 vision are our guiding beacons.
                </p>
             </div>
              <div className="p-4">
              <img src={speedIcon} alt="soundIcon" className="w-10" />
                <h3 className="font-bold my-4">Self Improvement</h3>
                 <p>
                 We never stop learning, continous learning is paramount to us.
                  We never stop evolving into who we want to be and where we
                   want to be.
                </p>
              </div>
             <div className="p-4">
                <img src={improvementIcon} alt="soundIcon" className="w-10" />
                <h3 className="font-bold my-4">Over Deliver</h3>
                <p>Deliver more value than our team & clients expect.</p>
              </div>
            </div>
          </div>
         </div>
    </section>
   
    </div>
  </div>
    

  );
}

export default About;
