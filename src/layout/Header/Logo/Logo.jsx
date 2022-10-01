import React from 'react';
import Image from '../img.svg'
import { NavLink } from 'react-router-dom';
import './Logo.scss'

export default class Logo extends React.Component {
	onChangeClass(){
		document.getElementById('searchLink').className = 'menu-list__link';
		document.getElementById('myListLink').className = 'menu-list__link';
	}
	render() {
		return (
			<>
				<NavLink  to="/" className='logo' onClick={this.onChangeClass} end>
					<img src={Image} alt="logo" />
					<div className='logo-text'>
						<span className='logo__text logo__text_active'>
							GitHub
						</span>
						<span className='logo__text'>
							Search
						</span>
					</div>
				</NavLink >
			</>
		);
	}
}