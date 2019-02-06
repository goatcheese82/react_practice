import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class UserEvent extends Component {

  getStyle = () => {
    return {
      background: this.props.user.current ? '#eee' : '#28d',
      padding: '10px',
      borderBottom: '4px #333 solid'  ,
      textDecoration: this.props.user.current ? 'none' : 'line-through'

    }
  }

  btnStyle = () => {
    return {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
    }

  }
  render() {

    const { id, name } = this.props.user;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markCurrent.bind(this, id)}/>
          { name }
          <button onClick={this.props.delUser.bind(this, id)} style={this.btnStyle()}>x</button></p>
      </div>
    )
  }
}

UserEvent.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserEvent
