import { useState, useEffect } from "react";
import { toast } from "react-toastify";

function VendorsRegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    storeName: "",
    picture: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    typeOfBusiness: "",
    phoneNumber: "",
    roleId: "",
    password: "",
    confirmPassword: "",
  });

  const {
    firstName,
    lastName,
    email,
    storeName,
    picture,
    address,
    city,
    state,
    postalCode,
    country,
    typeOfBusiness,
    phoneNumber,
    roleId,
    password,
    confirmPassword,
  } = formData;

  // Getting Vendor Role from all role from - AllRoleAPI
  useEffect(() => {
    const fetchRole = async () => {
      const fetchRoleData = await fetch(
        "https://getblack-api.herokuapp.com/api/role"
      );
      const data = await fetchRoleData.json();
      let result = data.data;
      result.forEach((role) => {
        if (role.name === "Vendor") {
          formData["roleId"] = role.id;
        }
      });
    };
    fetchRole();
    // eslint-disable-next-line
  }, []);

  const handleVendorSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Password is not correct");
    } else {
      const vendorData = {
        firstName,
        lastName,
        email,
        storeName,
        picture,
        address,
        city,
        state,
        postalCode,
        country,
        typeOfBusiness,
        phoneNumber,
        roleId,
        password,
        confirmPassword,
      };
      console.log(vendorData);
    }
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div className="container mx-auto p-4 pb-20">
      <header className="mb-4">
        <h2 className="text-2xl font-bold">Register Your Business</h2>
        <p>
          Please provide all required details to register your business with us.
        </p>
        <hr />
      </header>
      <form onSubmit={handleVendorSubmit}>
        <div className="grid">
          {/* Business Owner */}
          <div className="mt-2">
            <h3 className="text-md font-bold">Business Owner*</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mt-1 w-full">
                <input
                  type="text"
                  value={firstName}
                  id="firstName"
                  onChange={onChange}
                  className="p-3 border border-black rounded-lg w-full"
                  placeholder="Enter FirstName"
                  required
                />
                <label className="label text-black">
                  <span className="label-text text-sm">First Name</span>
                </label>
              </div>
              <div className="mt-1 w-full">
                <input
                  type="text"
                  value={lastName}
                  id="lastName"
                  onChange={onChange}
                  className="p-3 border border-black rounded-lg w-full"
                  placeholder="Enter LastName"
                  required
                />
                <label className="label text-black">
                  <span className="label-text text-sm">Last Name</span>
                </label>
              </div>
            </div>
          </div>
          {/* Business Name and Types of Business */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mt-4">
              <h3 className="text-md font-bold">Business Name*</h3>
              <div className="mt-1 w-full">
                <input
                  type="text"
                  value={storeName}
                  id="storeName"
                  onChange={onChange}
                  className="p-3 border border-black rounded-lg w-full"
                  placeholder="storeName"
                  required
                />
                <label className="label text-black">
                  <span className="label-text text-sm">Store Name</span>
                </label>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-md font-bold">Type of Business*</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mt-1 w-full">
                  <select
                    value={typeOfBusiness}
                    id="typeOfBusiness"
                    onChange={onChange}
                    className="select select-bordered w-full"
                  >
                    <option disabled>Others, please specify</option>
                    <option>Shop/Cafe</option>
                    <option>Store</option>
                    <option>Rentals</option>
                  </select>
                </div>
                <div className="mt-1 w-full">
                  <input
                    type="text"
                    // value={email}
                    id="others"
                    // onChange={onChange}
                    className="p-3 border border-black rounded-lg w-full"
                    placeholder="Others"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          {/* contact Details */}

          <div className="mt-2">
            <h3 className="text-md font-bold">Contact Details*</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {/* Phone */}
              <div className="mt-1 w-full">
                <input
                  type="text"
                  value={phoneNumber}
                  id="phoneNumber"
                  onChange={onChange}
                  className="p-3 border border-black rounded-lg w-full"
                  placeholder="ex: +372 12345678"
                  required
                />
                <label className="label text-black">
                  <span className="label-text text-sm">Phone Number</span>
                </label>
              </div>
              {/* Email */}
              <div className="mt-1 w-full">
                <input
                  type="email"
                  value={email}
                  id="email"
                  onChange={onChange}
                  className="p-3 border border-black rounded-lg w-full"
                  placeholder="ex: getblack@gmail.com"
                  required
                />
                <label className="label text-black">
                  <span className="label-text text-sm">Email</span>
                </label>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="mt-4">
            <h3 className="text-md font-bold">Password*</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="mt-1 w-full">
                <input
                  type="password"
                  value={password}
                  id="password"
                  onChange={onChange}
                  className="p-3 border border-black rounded-lg w-full"
                  placeholder="********"
                  required
                />
                <label className="label text-black">
                  <span className="label-text text-sm">password</span>
                </label>
              </div>
              <div className="mt-1 w-full">
                <input
                  type="password"
                  value={confirmPassword}
                  id="confirmPassword"
                  onChange={onChange}
                  className="p-3 border border-black rounded-lg w-full"
                  placeholder="********"
                  required
                />
                <label className="label text-black">
                  <span className="label-text text-sm">Confrim Password</span>
                </label>
              </div>
            </div>
          </div>

          {/* Adresss */}
          <div className="mt-4">
            <div>
              <h3 className="text-md font-bold">Address*</h3>
              <div className="mt-1 w-full">
                <input
                  type="text"
                  value={address}
                  id="address"
                  onChange={onChange}
                  className="p-3 border border-black rounded-lg w-full"
                  placeholder="ex: 1234 Main St"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="mt-1 w-full">
                <label className="label text-black">
                  <span className="label-text text-sm">Country</span>
                </label>
                <div className="w-full">
                  <select
                    value={country}
                    id="country"
                    onChange={onChange}
                    className="select select-bordered w-full"
                  >
                    <option disabled>Please Select</option>
                    <option>Canada</option>
                    <option>Estonia</option>
                    <option>Nigeria</option>
                    <option>United Kingdom</option>
                  </select>
                </div>
              </div>
              <div className="mt-1 w-full">
                <label className="label text-black">
                  <span className="label-text text-sm">State</span>
                </label>
                <input
                  type="text"
                  value={state}
                  id="state"
                  onChange={onChange}
                  className="p-3 border border-black rounded-lg w-full"
                  placeholder="ex: Tallinn"
                  required
                />
              </div>
              <div className="mt-1 w-full">
                <label className="label text-black">
                  <span className="label-text text-sm">City</span>
                </label>
                <input
                  type="text"
                  value={city}
                  id="city"
                  onChange={onChange}
                  className="p-3 border border-black rounded-lg w-full"
                  placeholder="ex: Tallinn city"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="mt-1 w-full">
                <label className="label text-black">
                  <span className="label-text text-sm">Picture</span>
                </label>
                <input
                  type="file"
                  value={picture}
                  id="picture"
                  onChange={onChange}
                  className="p-[10px] border border-black rounded-lg w-full"
                  required
                />
              </div>
              <div className="mt-1 w-full">
                <label className="label text-black">
                  <span className="label-text text-sm">Postal Code</span>
                </label>
                <input
                  type="text"
                  value={postalCode}
                  id="postalCode"
                  onChange={onChange}
                  className="p-3 border border-black rounded-lg w-full"
                  placeholder="ex: 10001"
                  required
                />
              </div>
            </div>
          </div>
          {/* Submit Button */}
          <div className="mt-8 w-full">
            <button
              type="sumbit"
              className="bg-[#52CD8B] text-black p-3 font-bold uppercase text-lg rounded-lg w-full"
            >
              Submit Registration
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default VendorsRegisterPage;