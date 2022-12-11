import { useEffect } from "react";

function FaqItems({ data, isOpen, handleClick, setIsOpen }) {
  // load the first FAQ item when the component is mounted
  useEffect(() => {
    if (data.id === 1) {
      setIsOpen(data.id);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        <div className="lg:w-full col-span-1 mx-4 my-[2px] bg-[#D9D9D9] rounded-md">
          <h3
            onClick={() => handleClick(data.id)}
            className="p-4 lg:p-3 pl-4 cursor-pointer font-bold text-sm lg:text-md"
          >
            {data.question}
          </h3>
          <hr />
        </div>
        <div className="lg:absolute lg:top-0 lg:right-0 lg:w-[58%] mx-4 my-2 bg-[#D9D9D9] bg-cover rounded-md">
          <div className="w-full px-10">
            {isOpen ? (
              <>
                <h1 className="text-left text-2xl font-bold my-4 ">
                  {data.question}
                </h1>
                <hr className="border-[1px] border-black" />
                {data.answer}
              </>
            ) : (
              " "
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default FaqItems;
