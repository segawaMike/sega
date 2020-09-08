import React from 'react'
import './checkout.css'
import {useStateValue} from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
function Checkout() {
	const [{basket}, dispatch] = useStateValue();
	return(
		<div className="checkout">
			
			
			<div className="checkout__products">
				<img src="imgs/banner2.jpg" alt=""/>
			{basket?.length === 0 ?(
				<div><h2>Your cart is empty</h2><p>Your shopping cart us currently empty.Click 'Buy' to add a product to cart</p></div>):(
				<div><h2>Your cart</h2></div>
				)}

				{basket.map(item=>(
					<CheckoutProduct
					id={item.id}
					title={item.title}
					description={item.description}
					image={item.image}
					price={item.price}
					rating={item.rating}
					/>


					))}

			</div>
			<div>
			{basket.length > 0 && (
				<div className="subtotal__container">
				<h1>Subtotal</h1>
				<Subtotal/>
				</div>

				)}
			</div>
		</div>
	)
}

export default Checkout