import React,{useState} from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom'
import {auth} from "./firebase"
function Login() {
	
	const history = useHistory();
	
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');


	const login = (e) =>{
		e.preventDefault();

		auth
		.signInWithEmailAndPassword(email,password)
		.then((auth) =>{
			history.push('/');
		})
		.catch((e)=>(e.message))

	}
	const create = (e) =>{
		e.preventDefault();

		auth
		.createUserWithEmailAndPassword(email,password)
		.then((auth) =>{
			history.push('/');
		})
		.catch((e)=>(e.message))

	}
	return(
		<div className="login">
				<Link to='/' className="">
				<img className="login__logo" src="/imgs/sega1.png" alt=""/>
				</Link>
				<form>
				<h4>Email</h4>
				<input className="login__input" type="email" placeholder="example@gmail.com" onChange={event =>setEmail(event.target.value)}/>
				<br/>
				<h4>Password</h4>
				<input className="login__input" type="text" placeholder="password" onChange={event =>setPassword(event.target.value)} />
				<p className="login__text"><input type="checkbox"/>by signing up yuou agree to our terms and conditions</p>
				</form>
				<button className="login__btn" onClick={login}>LOGIN</button><button className="login__btn" onClick={create}>SIGNUP</button>
			
		</div>

	)
}

export default Login