import React from 'react';

import {HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import Login from './Login'
import Checkout from './checkout'

function App() {
	return(
		
		<Router>
			<div className ="App">
			<Switch>
			<Route path='/checkout'>
			<Header/>
			<Checkout/>
			</Route>
			<Route path='/login'><Login/></Route>
			<Route path='/products'></Route>
			<Route path='/'>
			<Header/>
			<Home/>
			<Footer/>
			</Route>
			</Switch>
			</div>


		</Router>
	
		
	)
	

	
	
}

	

export default App