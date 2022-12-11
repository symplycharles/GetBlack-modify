import React from "react";

function Terms() {
  return (
    <>
      <div className="container mx-auto relative z-30">
        <div className="grid place-items-center gap-2 mx-4">
          <header className="text-center flex flex-col justify-center items-center">
            <h1 className="my-4 font-extrabold text-4xl">
              Terms and Condition 
            </h1>
           <h2 className="my-2 font-bold text-2xl">
              Welcome to our Website!
           </h2>

           <p className="text-left text-md">
              By using the GetBlack Service, you agree to these User Terms of Use.
              You accept that you have read, comprehended, and agree to be legally bound by the terms and conditions set forth in this agreement by accessing and using this site. You are not allowed to access or use this site if you do not agree to these terms of use.
           </p>

           <h2 className="my-2 font-bold text-2xl">
               GENERAL PROVISIONS
           </h2>
          
           <p className="text-left text-md">
              The remaining parts of this agreement shall continue in effect if any provision of this agreement is found to be invalid, unenforceable, or otherwise unlawful for any reason. The complete agreement between you and us about your use of the site is included in this document. If you have any queries about the Terms & Conditions, please email us at hello@getblack.ca
           </p>

          </header>
        </div>
      </div>
      {/* <div className=" absolute top-0 w-full -z-0">
        <div className="bg-[#0A0865] h-[500px] lg:rounded-b-full ">
        </div>
      </div> */}
    </>
  );
}

export default Terms;
