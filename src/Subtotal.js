import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from './StateProvider'
import {getBasketTotal} from './reducer'





function Subtotal() {
	const [{basket}, dispatch] = useStateValue();
	return(
		<div className="subtotal__cotainer">

			<CurrencyFormat

			renderText = {(value)=>(
				<>
					<p className="subtotal__values">
						Subtotal({basket.lenght} items):<strong>{value}</strong>
					</p>
					<small className="subtotal__gift">
					<input type="checkbox"/>Order comes with a gift
					</small>


				</>

			)}


			dismalScale={2}
			value={getBasketTotal(basket)}
			displayType={"text"}
			thousandSeparator={true}
			prefix={"$"}

			/>
			<div>
			<button className="subtotal__container__button">CheckOut</button>
			</div>
		</div>

	)
}
export default Subtotal