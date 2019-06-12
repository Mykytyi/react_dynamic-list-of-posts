import React from 'react';
import Post from './Post';
import {PostContext} from './context';

class PostList extends React.Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      posts: [],
      users: [],
      comments: []
    };
    this.loadItems = this.loadItems.bind(this);
  }

  loadItems(event) {
    event.target.innerHTML = 'Loading';

    const xhrPosts = new XMLHttpRequest();
    const xhrUsers = new XMLHttpRequest();
    const xhrComments = new XMLHttpRequest();
    xhrPosts.open('GET', 'https://jsonplaceholder.typicode.com/posts');

    xhrPosts.addEventListener('load', () => {

      xhrUsers.open('GET', 'https://jsonplaceholder.typicode.com/users');
      xhrUsers.send();
      xhrUsers.addEventListener('load', () => {

        xhrComments.open('GET', 'https://jsonplaceholder.typicode.com/comments');
        xhrComments.send();
        xhrComments.addEventListener('load', () => {
          let posts = JSON.parse(xhrPosts.response);
          let users = JSON.parse(xhrUsers.response);
          let comments = JSON.parse(xhrComments.response);
          this.setState({
            loaded: true,
            posts: posts,
            users: users,
            comments: comments
          });
        })
      });
    });
    xhrPosts.send();

    event.target.setAttribute('disabled', 'disabled');
  }

  render() {
    const contextObject = {
      users: this.state.users,
      comments: this.state.comments
    };
    return (
      <PostContext.Provider value={contextObject}>
        <div>
          <button onClick={this.loadItems}>CLick</button>
          {this.state.posts.map(item => <Post post={item} key={item['title']}/>)}
        </div>

      </PostContext.Provider>
    );
  }
}

export default PostList;
