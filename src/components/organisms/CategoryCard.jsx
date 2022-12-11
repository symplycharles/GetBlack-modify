import React, { useEffect, useState } from 'react';
import { setCategories } from '../../state-management/actions/categoryActions';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import dressIcon from '../../assets/images/icons/dress.png';
import foodIcon from '../../assets/images/icons/salad.png';
import makeUpIcon from '../../assets/images/icons/makeup.png';
import playIcon from '../../assets/images/icons/playtime.png';
import electronicsIcon from '../../assets/images/icons/computer.png';
import serviceIcon from '../../assets/images/icons/customer-service.png';
import vehiclesIcon from '../../assets/images/icons/car.png';
import artIcon from '../../assets/images/icons/star-night.png';
import freeStuffIcon from '../../assets/images/icons/free.png';
import Spinner from '../atoms/Spinner';

function CategoryCard() {
  const [state, setState] = useState({
    isLoading: true
  });
  const categories = useSelector((state) => state.allCategories.categories);
  const dispatch = useDispatch();

  const fetchCategories = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products/categories')
      .catch((err) => {
        console.log('Err: ', err);
      });
    setState({
      ...state,
      isLoading: false
    });
    dispatch(setCategories(response.data));

    console.log({ response });
  };

  useEffect(() => {
    fetchCategories();
  }, []);// eslint-disable-next-line react-hooks/exhaustive-deps

  if (state.isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {/* Destop screen */}
      <div className="hidden lg:grid card bg-[#F5F5F5] h-[330px]">
        <div className="card-body">
          <h3 className="card-title uppercase font-bold text-lg">Category</h3>
          <div className="grid grid-cols-1 place-items-center">
            <div className=" w-full dropdown dropdown-hover">
              <label
                tabIndex="0"
                className="flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <img src={dressIcon} alt="dressIcon" className="w-2 h-2" />
                  <p className="ml-2 text-xs">Fashion</p>
                </div>
                <div className="text-lg">
                  <p>&gt;</p>
                </div>
              </label>
              <ul
                tabIndex="0"
                className="dropdown-content menu p-4 text-xs shadow bg-white rounded-box w-52"
              >
                <li>Clothing</li>
                <li>Jewerly</li>
                <li>Bags</li>
                <li>Shoes</li>
                <li>Watches</li>
              </ul>
            </div>

            <div className="dropdown dropdown-hover w-full">
              <label
                tabIndex="0"
                className="flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <img src={serviceIcon} alt="dressIcon" className="w-2 h-2" />
                  <p className="ml-2 text-xs">Services</p>
                </div>
                <div className="text-lg">
                  <p>&gt;</p>
                </div>
              </label>
              <ul
                tabIndex="0"
                className="dropdown-content menu p-4 text-xs shadow bg-white rounded-box w-52"
              >
                <li>Cleaning & Services</li>
                <li>Health & Beauty</li>
                <li>Fitness & Personal Traning</li>
                <li>Computer & IT</li>
                <li>DJ & Entertainment</li>
                <li>Catering & Event</li>
                <li>Photography & Video</li>
                <li>Logistics</li>
                <li>Classes & courses</li>
                <li>Childcare (Nanny)</li>
              </ul>
            </div>

            <div className="dropdown dropdown-hover w-full">
              <label
                tabIndex="0"
                className="flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <img src={playIcon} alt="playIcon" className="w-2 h-2" />
                  <p className="ml-2 text-xs">Babies & kids</p>
                </div>
                <div className="text-lg">
                  <p>&gt;</p>
                </div>
              </label>
              <ul
                tabIndex="0"
                className="dropdown-content menu p-4 text-xs shadow bg-white rounded-box w-52"
              >
                <li>Baby & Child Care</li>
                <li>Children’s Clothing</li>
                <li>Children’s Shoes</li>
                <li>Children’s Funitures</li>
                <li>Children’s Gear & Safty</li>
                <li>Toys</li>
              </ul>
            </div>

            <div className="w-full dropdown dropdown-hover ">
              <label
                tabIndex="0"
                className="flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <img src={foodIcon} alt="dressIcon" className="w-2 h-2" />
                  <p className="ml-2 text-xs">Foods</p>
                </div>
                <div className="text-lg">
                  <p>&gt;</p>
                </div>
              </label>
              <ul
                tabIndex="0"
                className="dropdown-content menu p-4 text-xs shadow bg-white rounded-box w-52"
              >
                <li>Meals</li>
                <li>Drinks</li>
                <li>Groceries</li>
              </ul>
            </div>

            <div className="dropdown dropdown-hover w-full">
              <label
                tabIndex="0"
                className="flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <img src={playIcon} alt="dressIcon" className="w-2 h-2" />
                  <p className="ml-2 text-xs">Health & Beauty</p>
                </div>
                <div className="text-lg">
                  <p>&gt;</p>
                </div>
              </label>
              <ul
                tabIndex="0"
                className="dropdown-content menu p-4 text-xs shadow bg-white rounded-box w-52"
              >
                <li>MakeUp</li>
                <li>Bath & Body</li>
                <li>Fragrances</li>
                <li>Hair Beauty</li>
                <li>SkinCare</li>
              </ul>
            </div>
            <div className="dropdown dropdown-hover w-full">
              <label
                tabIndex="0"
                className="flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <img
                    src={electronicsIcon}
                    alt="electronicsIcon"
                    className="w-2 h-2"
                  />
                  <p className="ml-2 text-xs">Electronics</p>
                </div>
                <div className="text-lg">
                  <p>&gt;</p>
                </div>
              </label>
              <ul
                tabIndex="0"
                className="dropdown-content menu p-4 text-xs shadow bg-white rounded-box w-52"
              >
                <li>Laptops</li>
              </ul>
            </div>

            <div className="dropdown dropdown-hover w-full">
              <label
                tabIndex="0"
                className="flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <img
                    src={vehiclesIcon}
                    alt="vehiclesIcon"
                    className="w-2 h-2"
                  />
                  <p className="ml-2 text-xs">Vehicles</p>
                </div>
                <div className="text-lg">
                  <p>&gt;</p>
                </div>
              </label>
              <ul
                tabIndex="0"
                className="dropdown-content menu p-4 text-xs shadow bg-white rounded-box w-52"
              >
                <li>Cars</li>
              </ul>
            </div>
            <div className="dropdown dropdown-hover w-full">
              <label
                tabIndex="0"
                className="flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <img src={artIcon} alt="artIcon" className="w-2 h-2" />
                  <p className="ml-2 text-xs">Art</p>
                </div>
                <div className="text-lg">
                  <p>&gt;</p>
                </div>
              </label>
              <ul
                tabIndex="0"
                className="dropdown-content menu p-4 text-xs shadow bg-white rounded-box w-52"
              >
                <li>Arts & Crafts</li>
              </ul>
            </div>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center justify-between">
                <img
                  src={freeStuffIcon}
                  alt="freeStuffIcon"
                  className="w-2 h-2"
                />
                <p className="ml-2 text-xs">Free stuff</p>
              </div>
              <div className="text-lg">
                <p>&gt;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* from tablet downward */}
      <div className="lg:hidden grid grid-cols-3 md:grid-cols-2 gap-2 mt-6 place-items-center bg-[#F5F5F5] mx-2">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <img src={dressIcon} alt="foodIcon" className="w-10" />
          <h3 className="text-center">Fashion</h3>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <img src={serviceIcon} alt="Services" className="w-10" />
          <h3 className="text-center">Services</h3>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <img src={playIcon} alt="fplayIcon" className="w-10" />
          <h3 className="text-center">Babies & kids</h3>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <img src={foodIcon} alt="foodIcon" className="w-10" />
          <h3 className="text-center">Foods</h3>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center mt-2">
          <img src={makeUpIcon} alt="makeUpIcon" className="w-10" />
          <h3 className="text-center">Health & Beauty</h3>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center mt-2">
          <img src={electronicsIcon} alt="electronicsIcon" className="w-10" />
          <h3 className="text-center">Electronics</h3>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center mt-2">
          <img src={vehiclesIcon} alt="vehiclesIcon" className="w-10" />
          <h3 className="text-center">Vehicles</h3>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center mt-2">
          <img src={artIcon} alt="artIcon" className="w-10" />
          <h3 className="text-center">Art</h3>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center mt-2">
          <img src={freeStuffIcon} alt="freeStuffIcon" className="w-10" />
          <h3 className="text-center">Free stuff</h3>
        </div>
      </div>
    </>
  );
}

export default CategoryCard;