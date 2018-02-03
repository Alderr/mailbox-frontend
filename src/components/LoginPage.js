import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class Dashboard extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
        <h1>
          LoginPage
        </h1>

        <form>
          <label>
            Username:
            <input type="text" name="username" />
          </label>
          <label>
            Password:
            <input type="text" name="password" />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <button><Link to='/dashboard'>Go To Dashboard</Link></button>
      </div>
    )
  }
}
