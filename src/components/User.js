import React, {Component} from 'react';
import {PostContext} from "./context";

class User extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const user = this.context.users.find(item => item["id"] === this.props.userId);
    const usEmail = user.email;
    const usName = user.name;
    const usStreet = user.address.street;
    const usCity = user.address.city;

    return (
      <React.Fragment>
        <p><em>Name:</em> {usName}</p>
        <p><em>Email:</em> {usEmail}</p>
        <p><em>Adress:</em> {usCity}, {usStreet}</p>
      </React.Fragment>
    );
  }
}
User.contextType = PostContext;
export default User;
