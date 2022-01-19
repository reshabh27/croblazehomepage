import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import carousel1 from "./carousel1.jpg"
import carosuel2 from "./carosuel2.jpg"
import carosuel3 from "./carosuel3.jpg"

const slideImages = [
	{
		url: carousel1,
		caption: 'Slide 1'
	},
	{
		url: carosuel2,
		caption: 'Slide 2'
	},
	{
		url: carosuel3,
		caption: 'Slide 3'
	},
];

// const slideImages = [
// 	'./carousel1.jpg',
// 	'./carosuel2.jpg',
// 	'./carosuel3.jpg'
// ];


export const Slideshow = () => {

	return (
		<div className="slide-container">
			<Slide>
				{slideImages.map((slideImage, index) => (
					<div className="each-slide" key={index}>
						<div style={{ height:"50vh",width:"100vw",margin:"auto",'backgroundImage': `url(${slideImage.url})`, backgroundSize: "cover", backgroundRepeat:"no-repeat" }}>
							<span>{slideImage.caption}</span>
						</div>
					</div>
				))}
			</Slide>
		</div>	
	)
}
