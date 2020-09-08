import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import {useStateValue} from './StateProvider'
function Header() {
	const [{basket}] = useStateValue();

		console.log(basket);
	return(
		<div >
			<nav className="header">
				<Link to ='/'>
				    <img className="header__logo" src="/imgs/sega1.png" alt=""/>
				</Link>

				<div className="header__search">
					<input type="text" placeholder="search" className="header__searchInput"/>
					<SearchIcon className="header__serchIcon"/>
				</div>
			<div className="header__nav">
				<Link to='/login' className="header__navLink">
				 	<div className="header__option">
				 		<span  className="header__optionOne">Hello</span>
				 		<span className="header__optionTwo">SignIn</span>
				 	</div>
				</Link>

				<Link to='/' className="header__navLink">
				 	<div className="header__option">
				 		<span className="header__optionOne">Returns</span>
				 		<span className="header__optionTwo">&Orders</span>
				 	</div>
				</Link>

				<Link to='/' className="header__navLink">
				 	<div className="header__option">
				 		<span  className="header__optionOne">Your</span>
				 		<span className="header__optionTwo">Prime</span>
				 	</div>
				</Link>

				<Link to='/checkout'className="header__navLink">
				 	<div className="header__optionBasket">
				 		<span className="header__optionOne"><ShoppingBasketIcon/></span>
				 		<span  className="header__BasketCount">{basket?.length}</span>
				 	</div>
				</Link>
			</div>
			</nav>
		</div>
	)
}
export default Header
//logo on the left-- img
		//searchbox
		//three links
		///basket with a number