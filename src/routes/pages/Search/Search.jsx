import React from 'react';
import SearchPanel from '../../../components/SearchPanel/SearchPanel';
import DisplayType from '../../../components/DisplayType/DisplayType';
import Posts from '../../../layout/Posts/Posts';
import './Search.scss'
import {connect} from "react-redux";

const Search = (props) => {
  return (
    <>
      <SearchPanel/>
      <DisplayType/>
      <div className="wrapperPosts">
        <Posts posts={props.fetchedPosts} keyPreValue="mylist"/>
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    fetchedPosts: state.posts.fetchedPosts
  }
}
export default connect(mapStateToProps)(Search);
