import React from 'react';
import Line from './Line';
import Tile from './Tile'
import './DisplayType.scss'

export default class DisplayType extends React.Component {
	constructor(props) {
		super(props)
		this.strokeActive = '#3C4146'
		this.strokeNotActive = '#E0E0E0'
	}

	changeDisplay(newType, e){
		this.props.setDisplayType(newType)
		e.target.dataset.dispaly='activity'
	}

	render() {
		return (
			<div className='display-type'>
				{(this.props.displayType == "Tile")
					? <button className='display-type__button' data-dispaly='activity'>
						<Tile fill={this.strokeActive} />
					</button>
					: <button className='display-type__button' data-dispaly='notActivity' onClick={e=>this.changeDisplay("Tile", e)}
					>
						<Tile fill={this.strokeNotActive} />
					</button>
				}
				{(this.props.displayType == "Line")
					? <button className='display-type__button' data-dispaly='activity'>
						<Line fill={this.strokeActive} />
					</button>
					: <button className='display-type__button' data-dispaly='notActivity' onClick={e => this.changeDisplay("Line", e)}>
						<Line fill={this.strokeNotActive} />
					</button>
				}
			</div>
		);
	}
}