import React from "react";
import { Planet } from 'react-planet';
import "./selectfood.css"

import f1 from "../../../assets/images/f1.png"
import f2 from "../../../assets/images/f2.png"
import f3 from "../../../assets/images/f3.png"
import f4 from "../../../assets/images/f4.png"
import f5 from "../../../assets/images/f5.png"

const MyPlanet = () => {
      return (
        <div className="planet">
          <Planet
			centerContent={
				<img src={f1} alt='f1'
					style={{
						height: 100,
						width: 100,
						transform: "translateX(-2px)"
					}}
				/>
			}
			open
			autoClose
		>
			<img src={f2} alt='f2'
			    className="img2"
				style={{
					height: 70,
					width: 70,
					borderRadius: '50%',
                    transform: 'translateY(250px) translateX(-150px)'
				}}
			/>
			<img src={f3} alt='f3'
			    className="img3"
				style={{
					height: 70,
					width: 70,
                    transform: 'translateY(100px)'
				}}
			/>
			<img src={f4} alt='f4'
			    className="img4"
				style={{
					height: 70,
					width: 70,
                    transform: 'translateY(250px) translateX(-170px)'
				}}
			/>
			<img src={f5} alt='f5'
			    className="img5"
				style={{
					height: 70,
					width: 70,
                    transform: 'translateX(150px) translateY(40px)'
                    
				}}
			/>
			<img src={f1} alt='f1'
			    className="img6"
				style={{
					height: 70,
					width: 70,
                    transform: 'translateX(180px) translateY(110px)'
				}}
			/>
		</Planet>
        </div>
      )
}


export default MyPlanet