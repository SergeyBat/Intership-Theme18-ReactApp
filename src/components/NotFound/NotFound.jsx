import React from 'react';
import Git from './git.svg';
import './NotFound.scss'

export default class NotFound extends React.Component{
	render(){
		return(
			<div>
				<img src={Git} alt="Git" className='git'/>
				<div className="message">
					<h1 className='titleFound'>
						{this.props.title}
					</h1>
					<span className='textFound'>
						{this.props.message}
					</span>
				</div>
			</div>
		);
	}
}