import React, {Component} from 'react';
import './Comment.css';

class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <p><em>Name:</em> {this.props.postDetails["name"]}</p>
        <p><em>Email:</em> {this.props.postDetails["email"]}</p>
        <p><em>Text:</em> {this.props.postDetails["body"]}</p>
      </div>
    );
  }
}

export default Comment;
