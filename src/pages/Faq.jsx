import { useState } from "react";
import FaqItems from "../components/molecules/FaqItems";
import { faqData } from "../data/faqData";

function Faq() {
  const [isOpen, setIsOpen] = useState("");

  const handleClick = (id) => {
    setIsOpen(id);
  };

  return (
    <section className="relative">
      <div className="m-4">
        <input
          type="text"
          placeholder="Search"
          className=" p-2 w-full lg:max-w-sm rounded-lg border-2 border-[#D9D9D9] bg-[#D9D9D9] placeholder:text-black focus:outline-[#D9D9D9] mb-4"
        />
      </div>
      <div>
        {faqData.map((data) => (
          <FaqItems
            key={data.id}
            data={data}
            isOpen={isOpen === data.id}
            setIsOpen={setIsOpen}
            handleClick={handleClick}
          />
        ))}
      </div>
    </section>
  );
}

export default Faq;
