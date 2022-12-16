import React from 'react'
import sale from "../../assets/images/sales.png"


const FoodCard = () => {
    return (
        <div>
            <div>
                <img src={sale} alt="sale-logo" className='h-[40px] w-40px' />
                <p className='text-orange text-5xl font-medium leading-10'>Pounded Yam</p>
                <p className='text-4xl font-normal text-grey leading-9'>Egusi Soup and Meat</p>
                <p className='text-sm font-normal leading-6'>
                    What is pounded yam made of?
                    Pounded yam is simply prepared by boiling the yam in water and slicing and 
                    pounding it until it becomes smooth and doughy.
                    No seasonings and flavorings are needed. In short, pounded yam is yams & water.
                </p>
                <button className='bg-orange text-white py-2.5 px-12'>Order Now</button>
            </div>
        </div>
    )
}

export default FoodCard