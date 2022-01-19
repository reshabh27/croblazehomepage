
import { useState, useEffect } from 'react';
import './App.css';
import { Bestsells } from './Mycomponent/Bestsells';
import logo from "./Mycomponent/logo.png"
import envatomarket from "./Mycomponent/envatomarket-logo2.jpg";
import { Newproducts } from './Mycomponent/Newproducts';
import { Slideshow } from './Mycomponent/Slideshow';

import pdt1 from "./Mycomponent/products/pdt1.jpg"
import pdt2 from "./Mycomponent/products/pdt2.jpg"
import pdt3 from "./Mycomponent/products/pdt3.jpg"
import pdt4 from "./Mycomponent/products/pdt4.jpg"
import pdt5 from "./Mycomponent/products/pdt5.jpg"
import pdt6 from "./Mycomponent/products/pdt6.jpg"
import pdt7 from "./Mycomponent/products/pdt7.jpg"
import pdt8 from "./Mycomponent/products/pdt8.jpg"
// import pdt9 from "./Mycomponent/products/pdt9.jpg"
// import pdt10 from "./Mycomponent/products/pdt10.jpg"



const allpdt = [
	{ key: "allpdt1", "imglink": pdt1, cardtitle: "pdt1", oldprice: 50, newprice: 30 },
	{ key: "allpdt2", "imglink": pdt2, cardtitle: "pdt2", oldprice: 50, newprice: 30 },
	{ key: "allpdt3", "imglink": pdt3, cardtitle: "pdt3", oldprice: 50, newprice: 30 },
	{ key: "allpdt4", "imglink": pdt4, cardtitle: "pdt4", oldprice: 50, newprice: 30 },
	{ key: "allpdt5", "imglink": pdt5, cardtitle: "pdt5", oldprice: 50, newprice: 30 },
	{ key: "allpdt6", "imglink": pdt6, cardtitle: "pdt6", oldprice: 50, newprice: 30 },
	{ key: "allpdt7", "imglink": pdt7, cardtitle: "pdt7", oldprice: 50, newprice: 30 },
	{ key: "allpdt8", "imglink": pdt8, cardtitle: "pdt8", oldprice: 50, newprice: 30 }
]

const newpdt = [
	{ key: "newpdt1", "imglink": pdt1, cardtitle: "pdt1", oldprice: 50, newprice: 30 },
	{ key: "newpdt4", "imglink": pdt4, cardtitle: "pdt4", oldprice: 50, newprice: 30 },
	{ key: "newpdt6", "imglink": pdt6, cardtitle: "pdt6", oldprice: 50, newprice: 30 }
]

const bestsellpdt = [
	{ key: "bestpdt2", "imglink": pdt2, cardtitle: "pdt2", oldprice: 50, newprice: 30 },
	{ key: "bestpdt4", "imglink": pdt4, cardtitle: "pdt4", oldprice: 50, newprice: 30 },
	{ key: "bestpdt6", "imglink": pdt6, cardtitle: "pdt6", oldprice: 50, newprice: 30 },
	{ key: "bestpdt8", "imglink": pdt8, cardtitle: "pdt8", oldprice: 50, newprice: 30 }
]

const seasonalpdt = [
	{ key: "pdt2", "imglink": pdt2, cardtitle: "pdt2", oldprice: 50, newprice: 30 },
	{ key: "pdt5", "imglink": pdt5, cardtitle: "pdt5", oldprice: 50, newprice: 30 },
	{ key: "pdt7", "imglink": pdt7, cardtitle: "pdt7", oldprice: 50, newprice: 30 }
]

const otherpdt = [
	{ key: "pdt1", "imglink": pdt1, cardtitle: "pdt1", oldprice: 50, newprice: 30 },
	{ key: "pdt3", "imglink": pdt3, cardtitle: "pdt3", oldprice: 50, newprice: 30 },
	{ key: "pdt5", "imglink": pdt5, cardtitle: "pdt5", oldprice: 50, newprice: 30 }
]


function Cards(props) {
	// console.log(productdetail[0].imglink);
	return (
		<>
			<div className='cardx'>
				<img src={props.imglink} alt="cardimg" className='cardimg' width="180px" height="180px" />
				<div style={{ textAlign: "center" }}><b>{props.cardtitle}</b></div>
				<div style={{ textAlign: "center" }}>
					<select name="qntities" style={{ width: "150px", marginTop: "10px", marginBottom: "10px" }}>
						<option value="volvo">250gm-₹10</option>
						<option value="saab">500gm-₹20</option>
						<option value="mercedes">200gm-₹10</option>
						<option value="audi">200gm-₹10</option>
					</select>
				</div>
				<div style={{ textAlign: "center", fontSize: "0.81em", color: "#212529", marginBottom: "10px" }}>MRP: <strike style={{ color: "#7B7D7D", fontSize: "0.95em" }}>&#x20b9;{props.oldprice}</strike>  &#x20b9;{props.newprice}</div>
				<div style={{ textAlign: "center" }}> <span style={{ backgroundColor: "#e9ecef", padding: "5px 10px", border: "1px solid #ced4da" }}>Qty</span><input type="number" placeholder='0' min="0" max="20" class="quantity-field" /> <button className='cardbtn'>Add</button></div>
			</div>

		</>
	);
}

function App() {

	const [val, setVal] = useState(0);
	const [heroarr, setHeroarr] = useState(allpdt);
	const [navborder1, setNavborder1] = useState("4px solid #77bb17");
	const [navborder2, setNavborder2] = useState("4px solid rgba(255, 255, 255, 1)");
	const [navborder3, setNavborder3] = useState("4px solid white");
	const [navborder4, setNavborder4] = useState("4px solid white");
	const [navborder5, setNavborder5] = useState("4px solid rgba(255, 255, 255, 1)");

	function myFunction() {
		setVal(val + 1);
	}
	useEffect(() => {
		var x = document.getElementById("myLinks");
		if (x.style.display === "block") {
			x.style.display = "none";
		} else {
			x.style.display = "block";
		}
	}, [val]);

	function changetoall() {
		setHeroarr(allpdt);
	}
	function changetonew() {
		setHeroarr(newpdt);
	}
	function changetobestsell() {
		setHeroarr(bestsellpdt);
	}
	function changetoseasonal() {
		setHeroarr(seasonalpdt);
	}
	function changetoothers() {
		setHeroarr(otherpdt);
	}


	return (
		<div className="App">
			<div className="header1">

				<div class="preview__envato-logo">
					<a class="header-envato_market" href="#">Envato Market</a>
				</div>

				<div id="js-preview__actions" class="preview__actions">
					<div class="preview__action--buy">
						<a class="header-buy-now e-btn--3d -color-primary" href="#">Buy now</a>
					</div>
				</div>

			</div>

		{/* this box hides because header1 */}
			<div style={{height:"54px"}}>
				nice
			</div>

			{/* this will be viewed in screen */}
			<div className="header2">
				<div className="header2-row">
					<div className="header2-start">
						<div className="phone">
							<a href="#"><i className="fa fa-phone"></i> 012 346 7895</a>
						</div>
						<div className="mail">
							<a href="#"><i className="fa fa-envelope" ></i> abc@gmail.com</a>
						</div>
					</div>
					<div className="header2-end">
						<a href="#" style={{ borderRight: "1px solid white", paddingRight: "10px", color: "white" }}><i className="fa fa-shopping-cart"></i></a>
						<a href="#" style={{ color: "white", marginLeft: "8px", textDecoration: "none" }}>Login</a>
					</div>
				</div>
			</div>
			<div className="header3">
				<div className="header3-logo">
					<img src={logo} alt="logo" width="100px" className='logoleft' />
					<div className='navlinksright'>
						<a href="#home" className='navlinkhead'>Home</a>
						<a href="#about">About</a>
						<a href="#products">Products</a>
						<a href="#pages" className='dropdown'>Pages
							<div className='dropdown-content'>
								<div className='droplink'><a href="#faq"><span style={{ color: "white" }}>FAQ</span></a></div>
								<div className='droplink'><a href="#gallery"><span style={{ color: "white" }}>Gallery</span></a></div>
								<div className='droplink'><a href="#cart"><span style={{ color: "white" }}>Cart</span></a></div>
								<div className='droplink'><a href="#checkout"><span style={{ color: "white" }}>Checkout</span></a></div>
							</div>
						</a>
						<a href="#blog">Blog</a>
						<a href="#contact">Contact</a>
					</div>
				</div>
				<div className="topnav">
					<a href="#menu">Menu</a>
					<div id="myLinks">
						<a href="#home" className='navlinkhead'>Home</a>
						<a href="#about">About</a>
						<a href="#products">Products</a>
						<a href="#pages" className='dropdown'>Pages
							<div className='dropdown-content'>
								<div><a href="#faq"><span style={{ color: "white" }}>FAQ</span></a></div>
								<div><a href="#gallery"><span style={{ color: "white" }}>Gallery</span></a></div>
								<div><a href="#cart"><span style={{ color: "white" }}>Cart</span></a></div>
								<div><a href="#checkout"><span style={{ color: "white" }}>Checkout</span></a></div>
							</div>
						</a>
						<a href="#blog">Blog</a>
						<a href="#contact">Contact</a>
					</div>
					<a href="javascript:void(0);" className="icon" onClick={myFunction}><i className="fa fa-bars"></i></a>
				</div>
			</div>
			<br />

			<Slideshow />



			<div className='herosection'>
				<div className='shopingpdt-menu'>
					<span onClick={changetoall} className='heromenulink1'>All</span>
					<span onClick={changetonew} className='heromenulink2'>New</span>
					<span onClick={changetobestsell} className='heromenulink3'>Best Sells</span>
					<span onClick={changetoseasonal} className='heromenulink4'>Seasonal</span>
					<span onClick={changetoothers} className='heromenulink5'>Others</span>
				</div>
				<div className='herocontent'>
					{heroarr.map(Cards)}
				</div>
			</div>





			<Newproducts />

			<Bestsells />


			<div className='getupdatearea'>
				<div className='updateareatxt'>
					<h2>Get update about products</h2>
				</div>
				<div className='updatearea-inp'>
					<input type="email" placeholder='Email address' />
					<span style={{ backgroundColor: "background: rgba(255, 255, 255, 0.5 )", outline: "none" }}><button>Subscribe</button></span>
				</div>
			</div>

			<div className='footer-aboutus'>
				<h5 style={{ fontSize: "16px", fontWeight: "600" }}>ABOUT US</h5>
				<div className='aboutustxt'>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of tand scrambled it to make a type specimen wonder full book.
				</div>

				<div className="widget-icon">
					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-pinterest"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
				</div>


			</div>

		</div>
	);
}

export default App;

