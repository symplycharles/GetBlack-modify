import React from 'react'
import "./selectfood.css"
import right from "../../../assets/images/arrow.png"
import left from "../../../assets/images/arrow.png"

const BtnSlider = ({direction, moveSlide}) => {
  return (
    <div>
      <button onclick={moveSlide}
        className={direction === "next" ? "btn-slide next" : "btn-slide prev"}>
            <img src={direction === "next" ? right : left} alt="" />
      </button>
    </div>
  )
}

export default BtnSlider
