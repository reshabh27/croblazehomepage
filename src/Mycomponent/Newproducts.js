import React from 'react'
import "./newproduct.css"
import newproductimg from "./newproduct-img.jpg"
import pdt1 from "./products/pdt1.jpg"
import pdt2 from "./products/pdt2.jpg"
import pdt3 from "./products/pdt3.jpg"
import pdt4 from "./products/pdt4.jpg"
import pdt5 from "./products/pdt5.jpg"

// const productdetail = [
// 	{ "id": "1", "cardtitle": "pdt1", "imglink": { pdt1 }, "oldprice": "50", "newprice": "30" },
// 	{ "id": "2", 'cardtitle': "pdt2", 'imglink': { pdt2 }, 'oldprice': "70", 'newprice': "40" },
// 	{ "id": "3", "cardtitle": "pdt3", "imglink": { pdt3 }, "oldprice": "80", "newprice": "50" },
// 	{ "id": "4", "cardtitle": "pdt4", "imglink": { pdt4 }, "oldprice": "90", "newprice": "60" },
// 	{ "id": "5", "cardtitle": "pdt5", "imglink": { pdt5 }, "oldprice": "100", "newprice": "70" }
// ]

function Cardsvertical(props){
	return(
		<a href="#" className='verticalcards'>
			<div className='card2img'>
				<img src={props.imglink} alt="imgs" className='card2imgst'/>
			</div>
			<div className='card2content'>
				<p>{props.title}</p>
				<h5>{props.price}</h5>
			</div>
			<div className='card2btn'>
				<div>
					<button><i className="fa fa-shopping-cart"></i></button>
				</div>
				
				<div>
				<button><i className="fa fa-heart"></i></button>
				</div>
			</div>
		</a>
	);
}

export const Newproducts = () => {
	return (
		<div className='newpdts'>
			<div className='newpdtbox'>
				<h2>New Products</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing eiusmod tempor incididunt ut labore et consectetur adipisicing eiusmod dolore magna aliqua. </p>

				<div className='newpdtscontent'>
					<div className='newpdtlogo'>
						<img src={newproductimg} alt="logo" height="450" />
					</div>
					<div className='newpdtcoursel'>
						<Cardsvertical imglink={pdt1} title="product1" price="$50"/>
						<Cardsvertical imglink={pdt2} title="product2" price="$40"/>
						<Cardsvertical imglink={pdt3} title="product3" price="$30"/>
						<Cardsvertical imglink={pdt4} title="product4" price="$20"/>
						<Cardsvertical imglink={pdt5} title="product5" price="$10"/>
					</div>
				</div>
			</div>
		</div>
	)
}
