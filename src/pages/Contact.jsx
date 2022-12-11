import { useState } from "react";
import addressLogo from "../assets/images/address-logo.png";
import phoneLogo from "../assets/images/phone-logo.png";
import emailLogo from "../assets/images/email.logo.png";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const { fullName, email, message } = formData;

  // handle the onChange for the form
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // handle the onSubmit from the form
  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      fullName: "",
      email: "",
      message: "",
    });
    console.log(formData);
  };

  return (
    <>
      <div className="container mx-auto grid grid-cols-1 place-items-center mb-6 pb-10">
        <header className="mt-4 text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-left font-normal text-lg md:text-3xl mt-6 mx-4 md:w-[700px] lg:w-[1000px]">
            Want to get in touch with us? We’d love to hear from you and our
            team is happy to assist. Here’s how you can reach us.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center w-full mb-8">
          {/* the location icons and details section */}
          <div className="mt-8 md:mt-4 lg:w-3/4 w-full place-items-start order-2 md:order-1">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mx-4 ">
              <div className="flex max-w-80 w-full">
                <div className="">
                  <img
                    src={addressLogo}
                    alt="addressLogo"
                    className="w-10 md:w-12"
                  />
                </div>
                <div className="ml-10">
                  <h1 className="font-bold text-xl md:text-2xl">Address</h1>
                  <p className="text-md">
                    Peterburi Tee 24, <br /> Tallinn, Estonia. 11411
                  </p>
                </div>
              </div>
              <div className="flex max-w-80 w-full mt-4">
                <div className="">
                  <img
                    src={phoneLogo}
                    alt="phoneLogo"
                    className="w-10 md:w-12"
                  />
                </div>
                <div className="ml-10">
                  <h1 className="font-bold text-xl md:text-2xl">Phone</h1>
                  <p className="text-md">+37256766107</p>
                </div>
              </div>
              <div className="flex max-w-80 w-full mt-4">
                <div className="">
                  <img
                    src={emailLogo}
                    alt="emailLogo"
                    className="w-10 md:w-12"
                  />
                </div>
                <div className="ml-10">
                  <h1 className="font-bold text-xl md:text-2xl">Email</h1>
                  <p className="text-md">support@getblack.ca</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 w-full order-1 md:order-2">
            <div className="card bg-[#F5F5F5] mt-8 mx-4">
              <div className="card-body">
                <h5 className="card-title">Send Message</h5>
                {/* form section */}
                <form onSubmit={handleSubmit}>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="fullName"
                      value={fullName}
                      onChange={onChange}
                      className="w-full py-4 border-black border-b focus:outline-0 bg-[#F5F5F5] placeholder:text-black"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div className="mt-2">
                    <input
                      type="email"
                      value={email}
                      id="email"
                      onChange={onChange}
                      className="w-full py-4 border-black border-b focus:outline-0 bg-[#F5F5F5] placeholder:text-black"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="mt-2">
                    <textarea
                      value={message}
                      id="message"
                      onChange={onChange}
                      className="w-full h-20 border-black border-b focus:outline-0 bg-[#F5F5F5] placeholder:text-black placeholder:absolute placeholder:-bottom-0 resize-none"
                      placeholder="Type your message..."
                      required
                    ></textarea>
                  </div>
                  <div className="mt-6 w-full">
                    <button
                      type="submit"
                      className="bg-black text-white p-3 font-bold text-lg rounded-lg w-full"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
