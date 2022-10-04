import React from 'react';
import PostLine from '../../components/Post/PostLine';
import PostTile from '../../components/Post/PostTile';
import './Posts.scss'
import NotFound from '../../components/NotFound/NotFound';

export default class Posts extends React.Component {


	render() {
		return (
			<div className={`posts${this.props.displayType}`}>
				{this.props.posts.length === 0
					? <NotFound className="notFound" title='No results found' message='select other parameters and try again' />
					: this.props.posts.map(e => (
						(this.props.displayType === "Tile")
							? <PostTile key={`${this.props.keyPreValue}${e.id}`} item={e} onClick={this.props.changeMyList} dataActivity={this.props.dataActivity} />
							: <PostLine key={`${this.props.keyPreValue}${e.id}`} item={e} changeMyList={this.props.changeMyList} dataActivity={this.props.dataActivity} />
					))
				}
			</div>
		)
	}
}










/* changeMyList = (e) => {
	if (e.target.dataset.activity === "false") {
		console.log("MyList:", this.props.myList)
		this.props.setMyList(() => {
			let list = this.props.myList
			let id = e.target.parentNode.getAttribute("name")
			e.target.dataset.activity = "true"
			let item = this.props.responseSearch.find(element => {
				if (element.id == id) {
					return element
				}
			})
			list.push(item)
			console.log("list:", list)
			return list;
		})
	} else if (e.target.dataset.activity === "true") {
		console.log("MyList:", this.props.myList)
		this.props.setMyList(() => {
			let list = this.props.myList
			let id = e.target.parentNode.getAttribute("name")
			e.target.dataset.activity = "false"
			let itemIndex = this.props.myList.find((element, index) => {
				if (element.id === id) {
					return index
				}
			})
			list.splice(itemIndex, 1)
			return list;
		})
	}
} */