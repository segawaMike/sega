import React from 'react'
import {useStateValue} from './StateProvider'
import StarIcon from '@material-ui/icons/Star'
import './CheckoutProduct.css'

function CheckoutProduct({id, image, title, description, rating, price}) {
	
	const [{basket}, dispatch] = useStateValue();

	const removeFromBasket = ()=>{
		dispatch({
			type:"REMOVE__FROM__BASKET",
			id:id,
		})

	}

	return(
		<div className="checkout__item">
			<img src={image} alt=""/>
				<div className="checkout__product__info">
					<strong>{title}</strong>
					<p>{description}</p>
					<small>$</small>
					<strong>{price}</strong>
					<p className="checkoutProduct__rating__container">{Array(rating).fill().map((_)=>(<p><StarIcon className="checkoutProduct__rating"/></p>))}</p>
					<button className="product__btns" onClick={removeFromBasket} >Remove</button>
				</div>
		</div>

	)
}
export default CheckoutProduct