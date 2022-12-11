import React from "react";

function Blog() {
 return (
   <div className="container mx-auto relative z-10">
    <div className="grid place-items-center gap-2 mx-4">
    <header className="text-center flex flex-col justify-center items-center">
        <h1 className="my-4 font-extrabold text-4xl">
            GetBlack Blog
        </h1>
    </header>

    <section className="mt-2 md:mt-6 min-h-full">
            <div className="grid place-items-center gap-4 mx-1 md:mx-4 w-full">
              <img
                src="https://res.cloudinary.com/dirwn9yno/image/upload/v1664363233/getblack/image_a4xw74.png" 
                alt=""
                className="w-full h-full"
              />
            </div>
            <h3 className="font-bold my-4">Online shopping - An alternative to shopping in the mall.</h3>
            <p>September 21, 2022</p>
    </section>    


    </div>
   </div>
 );
      
}

export default Blog;