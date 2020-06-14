import React from "react";

export default class EBooks extends React.Component{

	constructor(){
		super();
		this.state = {
			title : "Master React",
			year : 2020,
			price : 250,
			btntext : "Apply Descount",
		};
	}

	applyDiscount = () => {


		if(this.state.price == 250){
			this.setState({ price: 150, btntext: "Discount Applied"});
		}else{
			this.setState({ price: 250, btntext: "Apply Discount"});
		}
		};

	render(){
		const element = <React.Fragment>
			<ul className="productListul">
				<li className="itemDesc">
					<div>
						<b>{this.state.title}</b>
						<p>{this.state.year}</p>
						<p>{this.state.price}</p>
					</div>
				</li>
			</ul>
			<p><button onClick={this.applyDiscount}>{this.state.btntext}</button></p>
		</React.Fragment> ;
		return element;
	}
}