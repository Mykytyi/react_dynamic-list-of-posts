import React from 'react';
import User from './User';
import {PostContext} from "./context";
import CommentList from "./CommentList";

class Post extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="post">
        <h2>{this.props.post["title"]}</h2>
        <p>{this.props.post["body"]}</p>
        <User userId={this.props.post["userId"]}/>
        <CommentList postId={this.props.post.id}/>
      </div>
    );
  }
}

Post.contextType = PostContext;

export default Post;
