import React, { Component } from 'react';
import { connect } from 'react-redux';
import loginGate from './requires-login-gate';
import CampaignCreateForm from './CampaignCreateForm';


import { Link } from 'react-router-dom';

import { getCampaigns, createContact } from '../actions/userActions';

export class DashboardCampaignCreate extends Component {
    constructor(props){
        super(props);

        this.state = {
          name: '',
          subject: '',
          sender: 'vernonmensah@gmail.com',

        }
    }

    handleChangeName = (value) => {
      console.log(value);
      this.setState({name: value});
    }

    handleChangeSubject = (value) => {
      console.log(value);
      this.setState({subject: value});
    }

    createCampaign = (data) => {
        this.props.dispatch(createContact(this.props.userId, this.props.listId, data, this.moveToListCampaignScreen));
    }

    moveToListCampaignScreen = () => {
      console.log('contact id...', this.props.listId);
      this.props.history.push(`/dashboard/lists/id/${this.props.listId}`);
    }

    render() {
        return(
            <section>
                <h1> Campaign - Create </h1>
                <div>
                <label htmlFor="name">Campaign Name:</label>
                <input type="text" onChange={ e => this.handleChangeName(e.currentTarget.value)} />
                </div>

                <div>
                <label htmlFor="subject">Subject Title:</label>
                <input type="text" onChange={e => this.handleChangeSubject(e.currentTarget.value)} />
                </div>

                <div>
                <label htmlFor="name">Sender:</label>
                <input type="text" value={this.state.sender} readOnly/>
                </div>

                <div>
                <label htmlFor="name">Lists:</label>
                </div>

                <div>
                <label htmlFor="name">Body:</label>
                </div>

                <button><Link to='/dashboard/campaigns'> Save </Link></button>


            </section>
        );
    }
}

const mapStateToProps = Reducers => {
    return {
        loggedIn: Reducers.loginReducer.loggedIn,
        message: Reducers.loginReducer.message
    };
};

export default loginGate()(connect(mapStateToProps)(DashboardCampaignCreate));
