import React from 'react'
import Product from './Product'
import './Home.css'

function Home() {
	return(
		<div className=" Home">
			<img src="/imgs/img12.jpg" alt="" className="home__img" />
			<div className="home__product__row1">
				<Product
				id="123456"
				title="Beef"
				description="best quality beef from western uganda"
				price={10}
				rating={5}
				image="/imgs/p1.png"
				/>
				<Product
				id="123451"
				title="Green Papper"
				description="Top quality paper from uganda"
				price={8}
				rating={4}
				image="/imgs/p2.png"
				/>
			</div>
			<div className="home__product__row">
				<Product
				id="123455"
				title="Onions"
				description="Buy african purple oranges at the cheapest price"
				price={10}
				rating={4}
				image="/imgs/p3.png"
				/>
				<Product
				id="123458"
				title="Oranges"
				description="These are the best Oranges in africa"
				price={5}
				rating={3}
				image="/imgs/p4.png"
				/>
				<Product
				id="123476"
				title="Kakira Suagr"
				description="Best quality and healthy sugar allover africa"
				price={380}
				rating={4}
				image="/imgs/p5.png"
				/>

			</div>

			<div className="home__product__row">
				
				<Product
				id="123656"
				title="Carrots"
				description="the best qulity carrots in east africa"
				price={10}
				rating={2}
				image="/imgs/p6.png"
				/>
				<Product
				id="153456"
				title="Beckon"
				description="this is the best quality beckon in ugand"
				price={100}
				rating={5}
				image="/imgs/p7.png"
				/>

			</div>
		</div>



	)
}


export default Home