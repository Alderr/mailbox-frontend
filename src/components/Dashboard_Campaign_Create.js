import React, { Component } from 'react';
import { connect } from 'react-redux';
import loginGate from './requires-login-gate';
import CampaignCreateSelect from './CampaignCreateSelect';
import CampaignCreateBody from './CampaignCreateBody';


import { Link } from 'react-router-dom';

import { getLists, createContact } from '../actions/userActions';

export class DashboardCampaignCreate extends Component {
    constructor(props){
        super(props);

        this.state = {
          name: '',
          subject: '',
          sender: 'vernonmensah@gmail.com',
          listsSelected: [],
          body: ''
        }
    }

    componentWillMount() {
        this.props.dispatch(getLists(this.props.userId));
    }

    handleChangeName = (value) => {
      console.log(value);
      this.setState({name: value});
    }

    handleChangeSubject = (value) => {
      console.log(value);
      this.setState({subject: value});
    }

    handleChangeLists = (value) => {
      console.log('value changed', value);
      this.setState({listsSelected: value});
    }

    createCampaign = (data) => {
        this.props.dispatch(createContact(this.props.userId, this.props.listId, data, this.moveToListCampaignScreen));
    }

    moveToListCampaignScreen = () => {
      console.log('contact id...', this.props.listId);
      this.props.history.push(`/dashboard/lists/id/${this.props.listId}`);
    }

    render() {
      console.log('PROPS!', this.props);

      let loading;
      if (this.props.loading) {
          return (<h3>Loading...</h3>);
      }


      let error;
      if (this.props.message) {
          error = <h3>{this.props.message}</h3>;
      }

      if (!this.props.loading && this.props.lists && !this.props.message) {
        
        return(
            <section>
                {error}
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
                <CampaignCreateSelect handleListsValue={e => this.handleChangeLists(e)}/>
                </div>

                <div>
                <label htmlFor="name">Body:</label>
                <CampaignCreateBody />
                </div>

                <button><Link to='/dashboard/campaigns'> Save </Link></button>


            </section>
        );
      }

      return (<h1>Something went wrong</h1>);
    }
}

const mapStateToProps = Reducers => {
    return {
        userId: Reducers.loginReducer.userId,
        loading: Reducers.userReducer.loading,
        message: Reducers.userReducer.message,
        lists: Reducers.userReducer.listsData
    };
};

export default loginGate()(connect(mapStateToProps)(DashboardCampaignCreate));
