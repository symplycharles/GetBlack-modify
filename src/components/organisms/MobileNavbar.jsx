import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function MobileNavbar() {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY < lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
    // eslint-disable-next-line
  }, [lastScrollY]);

  return (
    <footer
      className={`fixed lg:hidden right-0 bottom-0 left-0 h-20 border border-b-2 border-black bg-white text-black flex justify-center items-center z-50 transition-all ease-in-out duration-700 ${
        show && "translate-y-20 transition-all ease-in-out duration-700"
      }`}
    >
      <nav className="w-full overflow-y-hidden">
        <ul className="m-0 p-0 flex justify-between items-center">
          <li
            className="cursor-pointer flex flex-col items-center ml-4 md:ml-8"
            onClick={() => navigate("/")}
          >
            <p className="text-lg">
              <i className="fa-solid fa-house"></i>
            </p>
            <p className=" text-xs">Home</p>
          </li>
          <li
            className="cursor-pointer flex flex-col items-center"
            onClick={() => navigate("/offers")}
          >
            <p className=" text-lg">
              <i className="fa-solid fa-bookmark"></i>
            </p>
            <p className=" text-xs">Saved</p>
          </li>
          <li
            className="cursor-pointer flex flex-col items-center"
            onClick={() => navigate("/profile")}
          >
            <p className=" text-lg">
              <i className="fa-solid fa-circle-plus"></i>
            </p>
            <p className=" text-xs">Sell</p>
          </li>
          <li
            className="cursor-pointer flex flex-col items-center"
            onClick={() => navigate("/profile")}
          >
            <p className=" text-lg">
              <i className="fa-solid fa-message"></i>
            </p>
            <p className=" text-xs">Message</p>
          </li>
          <li
            className="cursor-pointer flex flex-col items-center mr-4 md:mr-8"
            onClick={() => navigate("/profile")}
          >
            <p className=" text-lg">
              <i className="fa-solid fa-user"></i>
            </p>
            <p className=" text-xs">Profile</p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default MobileNavbar;
