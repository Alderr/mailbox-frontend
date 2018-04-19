import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {

    render() {
        return(
            <section>
                <h1> Home </h1>
                <button><Link to='/login'>Log In</Link></button>
                <button><Link to='/register'>Register</Link></button>
                <button><Link to='/'>Learn More!</Link></button>
            </section>
        );
    }
}
