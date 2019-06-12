import React, {Component} from 'react';
import './CommentList.css';
import {PostContext} from "./context";
import Comment from './Comment';

class CommentList extends Component {
  render() {
    const posts = this.context.comments.filter(item => item["postId"] === this.props.postId);

    return (
      <div className="commentContainer">
        <b>Comments:</b>
        {posts.map(item => <Comment postDetails={item}/>)}
      </div>
    );
  }
}

CommentList.contextType = PostContext;
export default CommentList;
