import React from 'react'
import StarIcon from '@material-ui/icons/Star'
import './Product.css'
import {useStateValue} from './StateProvider'


function Product({id, title, price, rating,image, description}) {
	const [{basket}, dispatch] = useStateValue();
		const addToBasket = ()=>{
			dispatch({
				type:'ADD__TO__BASKET',
				item:{
					id:id,
					image:image,
					title:title,
					description:description,
					rating:rating,
					price:price				}
			})

		}
	return(
		<div className="product">
				<img src={image} alt=""/>
				<div className="product__info">
				<strong>{title}</strong>
				<p>{description}</p>
					<small>$</small>
					<strong>{price}</strong>
				<p className="product__rating">{Array(rating).fill().map((_)=>(<p><StarIcon/></p>))}</p>
			</div>
			<div className="product__btns">
			<button onClick={addToBasket}>Buy</button><button>View</button>
			</div>
		</div>

	)

}

export default Product