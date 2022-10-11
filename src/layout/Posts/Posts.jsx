import React from 'react';
import PostLine from '../../components/Post/PostLine';
import PostTile from '../../components/Post/PostTile';
import './Posts.scss'
import NotFound from '../../components/NotFound/NotFound';
import {connect} from "react-redux";
import {addItemOnMyList, delItemOnMyList} from "../../redux/actions/actions";

class Posts extends React.Component {

  changeMyList = ({target}, id) => {
    const objElement = {el: undefined}
    objElement.el = this.props.myListPosts.find(e => e.id === id)
    if (objElement.el === undefined) {
      objElement.el = this.props.fetchedPosts.find(e => e.id === id)
    }

    const fetchedPosts = this.props.fetchedPosts.map(e => {
      let item = {...e}
      if (item.id === id) {
        item.dataActivity === 'true' ? item.dataActivity = 'false' : item.dataActivity = 'true'
      }
      return item
    })
    if (objElement.el.dataActivity === "false") {
      if (this.props.myListPosts.length !== 0 && this.props.myListPosts.find(element => element.id === id)) {
        return
      }
      const itemElement = {...objElement.el}
      itemElement.dataActivity = "true"
      this.props.addItemOnMyList(itemElement, fetchedPosts)
    } else if (objElement.el.dataActivity === "true") {
      const myListPosts = this.props.myListPosts.filter((element) => element.id !== id)
      this.props.delItemOnMyList({myListPosts, fetchedPosts})
    }
  }


  render() {
    return (
      <div className={`posts${this.props.display}`}>
        {this.props.posts.length === 0
          ? <NotFound className="notFound" title='No results found' message='select other parameters and try again'/>
          : this.props.posts.map(e => (
            (this.props.display === "Tile")
              ? <PostTile key={`${this.props.keyPreValue}${e.id}`} item={e} onClick={this.changeMyList}/>
              : <PostLine key={`${this.props.keyPreValue}${e.id}`} item={e} changeMyList={this.changeMyList}/>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    display: state.displayType.display,
    fetchedPosts: state.posts.fetchedPosts,
    myListPosts: state.posts.myListPosts
  }
}
const mapDispatchToProps = {
  addItemOnMyList,
  delItemOnMyList
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
