import React from 'react';
import PostLine from '../../components/Post/PostLine';
import PostTile from '../../components/Post/PostTile';
import './Posts.scss'

export default class Posts extends React.Component {


	render() {
		return (
			<div className={this.props.displayType}>
				{this.props.responseSearch.map(e => {
					console.log(e);
					<PostLine />
				})}
			</div>
		)
	}
}