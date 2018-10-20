import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

export default class Home extends Component {

    render() {
        return(
            <section className='home-page'>
                <section className='company-container'>
                    <h1 className='mailbox-title'> mailbox </h1>
                    <h4 className='mailbox-tag-line'> Affordable email-marketing. </h4>
                </section>
                <section className='buttons-container'>
                    <button className='btn login-button'><Link to='/login'>Log In</Link></button>
                    <button className='btn register-button'><Link to='/register'>Register</Link></button>
                </section>
            </section>
        );
    }
}
