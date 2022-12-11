import React from "react";
import Footer from "./Footer";
import FooterBar from "./FooterBar";

function GroupFooter() {
  return (
    <div className="footer">
      <div className="grid grid-cols-1 place-items-center w-full bg-[#18191a] text-[#fff]">
        <Footer />
        <FooterBar />
      </div>
    </div>
  );
}

export default GroupFooter;
