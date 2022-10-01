import React from 'react';
import Line from './Line';
import Tile from './Tile'
import './DisplayType.scss'

export default class DisplayType extends React.Component {
	render() {
		return (
			<div className='display-type'>
				<button className='display-type__button'>
					<Tile fill="#E0E0E0" />
				</button>
				<button className='display-type__button'>
					<Line fill="#3C4146" />
				</button>
			</div>
		);
	}
}