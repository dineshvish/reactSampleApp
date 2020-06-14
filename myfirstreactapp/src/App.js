import React from 'react';
import './App.css';
import Products from './Components/Products';
import Welcome from './Components/Welcome';
import Orders from './Components/Orders';
import MyCart from './Components/MyCart';


function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Welcome/>
				<Products/>
				<MyCart/>
				<Orders/>
			</header>
		</div>
	);
}

export default App;
