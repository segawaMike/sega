import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'


function Footer() {
	return(
		<div className="footer__container">
			<div className="footer">
				<div className="footer__logo">
					<Link to='/'className="footer-logo-img"><img className="header__logo" src="/imgs/sega.png" alt=""/></Link>
					<div>
					<p className="footer__logo__text">We are one of the leading companies <br/>in web snd mobile app<br/> development in africa.<br/> 
					We have cheap prices and offer <br/>the best quality Services<br/> all over africa</p>
					</div>
				</div>
				<div className="footer__subcriber">
				<h5 style={{fontSize:'20px'}} className="footer-link" >Subcribe to our weekly news letter</h5>
					<form>
				<input style={{
					borderRadius:5,
					color:'white',
					padding:5
					
				}}
				type="email"  placeholder="your email"/>
				<button style={{
					borderRadius:5,
					color:'white',
					backgroundColor:'Orange',
					padding:5,
					marginLeft:5
					
				}}>SUBCRIBE</button>
				<p style={{
					fontSize:'15px'
				}}
				className="footer-link" >Your can un Subcribe at anytime</p>
				</form>
				</div>
				<div className="foot__menu">
				<h4 className="footer-link" >Quick Links</h4>
				<Link to='/' className="footer-link">Affiliates</Link>
				<Link to='/Services' className="footer-link">Partners</Link>
				<Link to='/About' className="footer-link">About</Link>
				<Link to='/Products'className="footer-link"><button style={{
					borderRadius:5,
					color:'white',
					backgroundColor:'Orange',
					padding:5,
					marginTop:15,
				}}
				>BECOME A SELLER</button></Link>
				</div>
				<div className="footer__contact">
				<h3 className="footer-link">Contact</h3>
				<div>
				<Link to='/' className="foot-link" target='_blank'><i class='fab fa-facebook'/></Link>
				<Link to='/Services' className="foot-link" target='_blank'><i class ='fab fa-instagram'/></Link>
				<Link to='/About' className="foot-link" target='_blank'><i class='fab fa-twitter'/></Link>
				<Link to='/Contact Us'className="foot-link" target='_blank'><i class='fab fa-linkedin'/></Link>
				</div>
				<Link to='/'className="foot-link" target='_blank'><i class='fas fa-phone'/> +256758042033</Link>
				<Link to='/'className="foot-link" target='_blank'><i class='fas fa-map'/> Kampala, Uganda</Link>
				<Link to='/'className="foot-link" target='_blank'><i class='fas fa-envelope'/> collinsmicheal256@gmail.com</Link>
				
				</div>
			</div>
			<p className="footer__copyright">&copy; segawa micheal collins 2020 <i class='fab fa-cc-visa'/> <i class='fab fa-cc-mastercard'/> <i class='fab fa-cc-stripe'/> <i class='fab fa-cc-paypal'/> </p>
		</div>
	)
}
export default Footer