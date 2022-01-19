import React from 'react'
import "./bestsells.css"
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

function Cards(props) {
	// console.log(productdetail[0].imglink);
	return (
		<>
			<div className='card'>
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
				<div style={{textAlign:"center",fontSize: "0.81em",color: "#212529",marginBottom:"10px"}}>MRP: <strike style={{color: "#7B7D7D",fontSize: "0.95em"}}>&#x20b9;{props.oldprice}</strike>  &#x20b9;{props.newprice}</div>
				<div style={{textAlign:"center"}}> <span style={{backgroundColor: "#e9ecef",padding:"5px 10px",border: "1px solid #ced4da"}}>Qty</span><input type="number" placeholder='0' min="0" max="20" class="quantity-field" /> <button className='cardbtn'>Add</button></div>
			</div>

		</>
	);
}
// console.log(productdetail[0].imglink);



function sideScroll(element, direction, speed, distance, step) {
	let scrollAmount = 0;
	var slideTimer = setInterval(() => {
		if (direction === 'left') {
			element.scrollLeft -= step;
		} else {
			element.scrollLeft += step;
		}
		scrollAmount += step;
		if (scrollAmount >= distance) {
			window.clearInterval(slideTimer);
		}
	}, speed);
}


class CardContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			disableScroll: false,
			scrollWidth: 0,
			scrollPos: 1,
			clonesWidth: 0,
		}
		this.scrollContainerRef = React.createRef();
		this.handleScroll = this.handleScroll.bind(this);
		this.scrollNext = this.scrollNext.bind(this);
		this.scrollPrev = this.scrollPrev.bind(this);
		this.setScroll = this.setScroll.bind(this);
		this.getClonesWidth = this.getClonesWidth.bind(this);
		this.reCalc = this.reCalc.bind(this);
	}

	reCalc() {
		let scrollPos = this.state.scrollPos;
		let scrollWidth = this.scrollContainerRef.current.clientWidth;
		let clonesWidth = this.getClonesWidth();

		if (scrollPos <= 0) {
			scrollPos = 1;
		}
		this.setState({
			scrollPos: scrollPos,
			scrollWidth: scrollWidth,
			clonesWidth: clonesWidth,
		});
	}

	handleScroll(e) {
		const container = e.currentTarget;
		const scrollWidth = container.scrollWidth;
		const clonesWidth = this.getClonesWidth();
		let scrollPos = container.scrollLeft;
		let scrollPosAdd;
		container.clientWidth > clonesWidth ? scrollPosAdd = container.clientWidth : scrollPosAdd = clonesWidth;

		if (!this.state.disableScroll) {
			if (scrollPos + scrollPosAdd >= scrollWidth) {
				this.setScroll(
					// The math floor value helps smooth out the scroll jump, 
					// I don't know why that particular value works, but it does 
					// Same goes for the other setScroll call below
					container, 1 + Math.floor(scrollPosAdd / 12.09)
				);
				this.setState({
					disableScroll: true,
				});
			} else if (scrollPos <= 0) {
				this.setScroll(
					container, scrollWidth - clonesWidth - Math.floor(scrollPosAdd / 12.09)
				);
				this.setState({
					disableScroll: true,
				});
			}
		}

		this.setState({
			scrollWidth: container.scrollWidth,
			scrollPos: container.scrollLeft,
		});
	}

	getClonesWidth() {
		const clones = document.getElementsByClassName('is-clone');
		let clonesWidth = 0;
		for (let i = 0; i < clones.length; i++) {
			clonesWidth = clonesWidth + clones[i].clientWidth;
		}
		return clonesWidth;
	}

	setScroll(element, pos) {
		element.scrollLeft = pos;
		this.setState({
			scrollPos: element.scrollLeft,
		});
	}

	scrollNext(e) {
		const container = e.currentTarget.previousSibling;
		sideScroll(container, 'right', 10, 272, 10);
	}

	scrollPrev(e) {
		const container = e.currentTarget.nextSibling;
		sideScroll(container, 'left', 10, 272, 10);
	}



	componentDidUpdate(prevProps, prevState) {
		if (this.state.disableScroll) {
			window.setTimeout(function () {
				this.setState({
					disableScroll: false,
				});
			}.bind(this), 40)
		}
	}

	componentDidMount() {
		window.addEventListener('resize', this.reCalc);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.reCalc);
	}

	render() {
		return (
			<div className="card-container">
				<div className="scroll scroll-prev" onClick={this.scrollPrev}>
					&#60;
				</div>
				<div ref={this.scrollContainerRef} className="scrolling-wrapper" onScroll={this.handleScroll}>
					<Cards cardtitle="pdt1" imglink={pdt1} oldprice="50" newprice="30" classes={""} />
					<Cards cardtitle="pdt2" imglink={pdt2} oldprice="70" newprice="40" />
					<Cards cardtitle="pdt3" imglink={pdt3} oldprice="80" newprice="50" />
					<Cards cardtitle="pdt4" imglink={pdt4} oldprice="90" newprice="60" />
					<Cards cardtitle="pdt5" imglink={pdt5} oldprice="100" newprice="70" />
					{/* <Cards title={'Card Number 6'} /> */}
					<Cards cardtitle="pdt1" imglink={pdt1} oldprice="50" newprice="30" classes={"is-clone is-start"} />
					<Cards cardtitle="pdt2" imglink={pdt2} oldprice="70" newprice="40" classes={"is-clone"} />
					<Cards cardtitle="pdt3" imglink={pdt3} oldprice="80" newprice="50" classes={"is-clone"} />
					<Cards cardtitle="pdt4" imglink={pdt4} oldprice="90" newprice="60" classes={"is-clone"} />
					<Cards cardtitle="pdt5" imglink={pdt5} oldprice="100" newprice="70" classes={"is-clone"} />
					{/* <Cards title={'Card Number 6'} classes={"is-clone"}/> */}
				</div>
				<div className="scroll scroll-next" onClick={this.scrollNext}>
					&#62;
				</div>
			</div>
		)
	}
}




export const Bestsells = () => {
	return (
		<div>
			<div className="main">
				<main className="content">
					<h2>Best Sells</h2>
					<p style={{ textAlign: "center" }}>Lorem ipsum dolor sit amet, consectetur adipisicing eiusmod tempor incididunt ut labore et consectetur adipisicing eiusmod dolore magna aliqua. </p>
					<CardContainer />
				</main>
			</div>
			{/* <h2>Best Sells</h2>
			<p style={{ textAlign: "center" }}>Lorem ipsum dolor sit amet, consectetur adipisicing eiusmod tempor incididunt ut labore et consectetur adipisicing eiusmod dolore magna aliqua. </p>

			<div>
				{productdetail.map(Mediator)}

				<Cards imglink={pdt2}
					cardtitle="orange"
					oldprice="5"
					newprice="10"
				/>
			</div> */}
		</div>
	)
}
