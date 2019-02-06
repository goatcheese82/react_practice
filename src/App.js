import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Users from './components/Users';
import Header from './components/layout/Header';
import AddUser from './components/AddUser';
//import uuid from 'uuid';
import axios from 'axios';
import About from './components/pages/About';
import './App.css';


class App extends Component {

  state = {
    users: []
  }

  componentDidMount() {
    axios.get('http://localhost:3000/users').then(res => this.setState({ users: res.data }))
  }

  markCurrent = (id) => {
    this.setState({
      users: this.state.users.map(user => {
        if (user.id === id) {
          user.current = !user.current
        }
        return user;

      })
    })
  }

  delUser = (id) => {

    axios.delete(`localhost/users/${id}`).then(res => this.setState({ users: [...this.state.users.filter(user => user.id !== id)] }))
    console.log(`Item ${id} Deleted`)
  }

  addUser = (name) => {
      axios.post('https://localhost/users', {
        name: name,
        first_name: name,
        current: false
      })
      .then(res => this.setState({ users: [...this.state.users, res.data ]}));
  }



  render() {
    console.log(this.state.users)
    return (
      <Router>
        <div className="App">
          < Header />
          <Route exact path='/' render={props => (
            <React.Fragment>
              < AddUser addUser={this.addUser} />
              <Users users={this.state.users} markCurrent={this.markCurrent} delUser={this.delUser} />

            </React.Fragment>
          )} />
          <Route path='/about' component={About} />

        </div>
      </Router>
    );
  }
}

export default App;
