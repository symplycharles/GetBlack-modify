import React from "react";
import { Planet } from 'react-planet';

import f1 from "../../../assets/images/f1.png"
import f2 from "../../../assets/images/f2.png"
import f3 from "../../../assets/images/f3.png"
import f4 from "../../../assets/images/f4.png"
import f5 from "../../../assets/images/f5.png"

const MyPlanet = () => {
      return (
        <>
          <Planet
			centerContent={
				<img src={f1} alt='f1'
					style={{
						height: 100,
						width: 100,
						borderRadius: '50%',
						backgroundColor: '#1da8a4',
					}}
				/>
			}
			open
			autoClose
		>
			<img src={f2} alt='f2'
				style={{
					height: 70,
					width: 70,
					borderRadius: '50%',
					backgroundColor: '#9257ad',
                    transform: 'translate(100px) rotate(270deg)'
				}}
			/>
			<img src={f3} alt='f3'
				style={{
					height: 70,
					width: 70,
					borderRadius: '50%',
					backgroundColor: '#9257ad',
                    transform: 'translate(-100px) rotate(270deg)'
				}}
			/>
			<img src={f4} alt='f4'
				style={{
					height: 70,
					width: 70,
					borderRadius: '50%',
					backgroundColor: '#9257ad',
                    transform: 'translateY(40px) translateX(-200px) rotate(270deg)'
				}}
			/>
			<img src={f5} alt='f5'
				style={{
					height: 70,
					width: 70,
					borderRadius: '50%',
					backgroundColor: '#9257ad',
                    transform: 'translateX(270px) translateY(-100px) rotate(270deg)'
                    
				}}
			/>
			<img src={f1} alt='f1'
				style={{
					height: 70,
					width: 70,
					borderRadius: '50%',
					backgroundColor: '#9257ad',
                    transform: 'translate(270px) rotate(270deg)'
				}}
			/>
		</Planet>
        </>
      )
}


export default MyPlanet