import React from 'react';

export default class Welcome extends React.Component{

	constructor(){
		super();
		this.defaultmessage = "My Shopping cart";
	}

	displayMessage(){
		if(this.props.name == null){
			return this.defaultmessage;
		}else{
			return this.props.name;
		}
	}
	render(){
		return <div>Welcome to {this.displayMessage()}</div>
	}
}