import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import loginGate from './requires-login-gate';
import CampaignCreateForm from './CampaignCreateForm';
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

    createCampaign = (data) => {
        this.props.dispatch(createContact(this.props.userId, this.props.listId, data, this.moveToListCampaignScreen));
    }

    saveCampaignData = (data) => {
      console.log(data);
      this.setState(data);
    }

    moveToListCampaignScreen = () => {
      console.log('contact id...', this.props.listId);
      this.props.history.push(`/dashboard/lists/id/${this.props.listId}`);
    }

    passPropsToForm = (props) => {
      console.log('passing propss..');
      return <CampaignCreateForm
        saveCampaignData={this.saveCampaignData}
        {...props} />;
    }

    passProps = (props, yourProps, Component) => {
      console.log('dynamically passing props..');
      console.log(props.match);
      return <Component
        {... yourProps}
        {...props} />;
    }

    render() {
      console.log('PROPS! Campaign Create', this.props);
      const { saveCampaignData } = this;
      const { match, location, history } = this.props;


      let loading;
      if (this.props.loading) {
          return (<h3>Loading...</h3>);
      }

      let error;
      if (this.props.message) {
          error = <h3>{this.props.message}</h3>;
      }

      if (!this.props.loading && this.props.lists) {


        console.log("url: ", match.url);
        return(
            <section>
              <h1>Campaign Create! </h1>
                {error}
                <Route exact path={`/dashboard/campaigns/create/email`} component={(props) => this.passProps(props, { saveCampaignData }, CampaignCreateBody)} />
                <Route exact path={`/dashboard/campaigns/create`} component={(props) => this.passProps(props, { saveCampaignData }, CampaignCreateForm )} />
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
