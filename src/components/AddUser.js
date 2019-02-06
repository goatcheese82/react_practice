import React, { Component } from 'react'

export class AddUser extends Component {

    state =  {
        name: '',
        first_name: ''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state.name);
        this.setState({ name: '' })
    }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
            <input type='text' name='name' plassholder='Add User' value={this.state.name} onChange={this.onChange} />
            <input type='submit' value='submit' />
        </form>
      </div>
    )
  }
}

export default AddUser
