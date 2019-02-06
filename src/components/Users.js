import React, { Component } from 'react';
import UserEvent from './UserEvent';
import PropTypes from 'prop-types'

class Users extends Component {

  render() {
    console.log(this.props.users)
    return this.props.users.map((user) => (
        <UserEvent key={user.id} user={user} markCurrent={this.props.markCurrent} delUser={this.props.delUser} />
      ));
  }
}


Users.propTypes = {
  users: PropTypes.array.isRequired
}

export default Users;
