import React from 'react';
import './Header.scss'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu';

export default class Header extends React.Component {
	render() {		
		return(
			<div className='header'>
				<Logo className='header-logo'/>
				<Menu className='header-menu' classForLink={this.props.classForLink} />
			</div>
		);
	}
};