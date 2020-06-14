import React from 'react';
import Welcome from './Welcome';
import EBooks from './ProductComponents/EBooks';


export default class Products extends React.Component{

	render(){
		return (
			<div>
				<Welcome name="Products"/>
				<EBooks/>
			</div>
	)

	}
}