import React from 'react';
import DisplayType from '../../../components/DisplayType/DisplayType';
import Posts from '../../../layout/Posts/Posts';
import './MyList.scss';
import {connect} from "react-redux";

const MyList = (props) => {


  return (
    <>
      <h1 className='title'> My List</h1>
      <DisplayType/>
      <div className="wrapperPosts">
        <Posts posts={props.myListPosts} keyPreValue="mylist"/>
      </div>
    </>
  );
}
const mapStateToProps = state => {
  return {
    myListPosts: state.posts.myListPosts
  }
}
export default connect(mapStateToProps, null)(MyList);
