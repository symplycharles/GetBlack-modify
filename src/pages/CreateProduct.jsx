import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../state-management/actions/createProductActions";
import { userRequest } from "../requestMethods";
import Spinner from "../components/atoms/Spinner";

import FooterBar from "../components/atoms/FooterBar";

function CreateProduct() {
  const [productData, setProductData] = useState({
    category: "",
    location: "",
    image: "",
    name: "",
    price: 0,
    address: "",
    avalibility: "",
    description: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const { category, location, name, price, address, avalibility, description } =
    productData;

  const dispatch = useDispatch();

  // TODO - make the product submit, after the vendor logic has worked
  // Create product
  const handleSubmitProduct = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await userRequest.post("/product", productData);
    setIsLoading(false);
    dispatch(createProduct(response.data));
  };

  const onChange = (e) => {
    setProductData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <div className="container mx-auto p-4">
        <header>
          <h2 className="font-bold text-2xl capitalize">create new listing</h2>
          <p className="mt-8 py-2 px-4 bg-green-600 text-white rounded-lg w-[320px]">
            Product Details
          </p>
        </header>
        <div className="mb-8">
          <form
            onSubmit={handleSubmitProduct}
            className="grid grid-cols-1 gap-2"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mt-4">
              <div className="">
                <select
                  className="select border-gray-400 w-full max-w-xs"
                  onChange={onChange}
                  value={category}
                >
                  <option disabled selected>
                    Select Category
                  </option>
                  <option>Homer</option>
                  <option>Marge</option>
                  <option>Bart</option>
                  <option>Lisa</option>
                  <option>Maggie</option>
                </select>
              </div>
              <div>
                <select
                  className="select border-gray-400 w-full max-w-xs"
                  onChange={onChange}
                  value={location}
                >
                  <option disabled selected>
                    Select Location
                  </option>
                  <option>Homer</option>
                  <option>Marge</option>
                  <option>Bart</option>
                  <option>Lisa</option>
                  <option>Maggie</option>
                </select>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="mt-4">
                <h4 className="font-bold text-lg">Add Photo</h4>
                <p>You can add at least 1 photo for this Category</p>
                <p>
                  First picture - is the title picture. You can change the order
                  of the photos. just grab your photos and drop.
                </p>
                <div className="mt-4">
                  <input type="file" />
                </div>
              </div>
              <div className="mt-2 w-full">
                <label className="label text-black">
                  <span className="label-text text-lg">Product Name</span>
                </label>
                <input
                  type="text"
                  id="name"
                  onChange={onChange}
                  value={name}
                  className="p-2 border border-gray-400 rounded-lg w-full"
                  placeholder="Title"
                  required
                />
              </div>
              <div className="mt-2 w-full">
                <label className="label text-black">
                  <span className="label-text text-lg">Address</span>
                </label>
                <input
                  type="text"
                  id="address"
                  onChange={onChange}
                  value={address}
                  className="p-2 border border-gray-400 rounded-lg w-full"
                  placeholder="Title"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="w-full">
                  <label className="label text-black">
                    <span className="label-text text-lg">Price</span>
                  </label>
                  <input
                    type="number"
                    id="price"
                    onChange={onChange}
                    value={price}
                    className="p-2 border border-gray-400 rounded-lg w-full"
                    placeholder="Price"
                    required
                  />
                </div>
                <div className="w-full">
                  <label className="label text-black">
                    <span className="label-text text-lg">Avalibility</span>
                  </label>
                  <input
                    type="text"
                    id="avalibility"
                    onChange={onChange}
                    value={avalibility}
                    className="p-2 border border-gray-400 rounded-lg w-full"
                    placeholder="Avalibility"
                    required
                  />
                </div>
              </div>
              <div className="mt-2">
                <label className="label text-black">
                  <span className="label-text text-lg">Description</span>
                </label>
                <textarea
                  id="description"
                  onChange={onChange}
                  value={description}
                  className="w-full h-20 resize-none border border-gray-400 rounded-lg p-2"
                  placeholder="Description"
                  required
                ></textarea>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex justify-between items-center">
                <div className="">
                  <p className="px-6 py-2 bg-red-500 text-white rounded-lg cursor-pointer font-semibold">
                    Clear
                  </p>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-black text-white py-2 px-6 font-bold rounded-lg"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <FooterBar />
    </>
  );
}

export default CreateProduct;
