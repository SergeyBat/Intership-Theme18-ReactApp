import React from 'react';
import './Menu.scss';
import { NavLink } from 'react-router-dom';

export default class Menu extends React.Component {
	render() {
		return (
			<ul className='menu-list'>
				<li className='menu-list__item'>
					<NavLink className="menu-list__link"
						to="/search" id='searchLink'>Search</NavLink>
				</li>
				<li className='menu-list__item'>
					<NavLink className="menu-list__link" to="/my-list"  id='myListLink'>My List</NavLink>
				</li>
			</ul>
		)
	}
}