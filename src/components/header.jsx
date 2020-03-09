import React from 'react'
import '../styles/header.scss'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/crown.svg';
import { auth } from '../services/firebase'


function Header({user}) {
	return (
		<div className='header'>
			<Link className='logo-container' to='/'>
				<Logo className='logo' />
			</Link>
			<div className='options'>
				<Link className='option' to='/shop'>
					SHOP
				</Link>
				{
					user ? 
						<div class='option' onClick={() => auth.signOut()}>SIGNOUT</div> : 
						<Link className='option' to='/signin'>
							SIGNIN
						</Link>
				}
				<Link className='option' to='/shop'>
					CONTACT
				</Link>
			</div>
		</div>
	)
}

export default Header