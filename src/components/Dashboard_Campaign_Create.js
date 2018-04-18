import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';

import loginGate from './requires-login-gate';
import CampaignCreateForm from './CampaignCreateForm';
import CampaignCreateBody from './CampaignCreateBody';
import CampaignEndScreen from './CampaignEndScreen';

import { createCampaign, getLists } from '../actions/userActions';

export class DashboardCampaignCreate extends Component {
    constructor(props){
        super(props);

        this.state = {
            template: '<html><body><br><br><h1>Hello. ^^</h1><h2>Put your email here!</h2></body></html>',
            data: {}
        };

        this.sendCampaignData = this.sendCampaignData.bind(this);
        this.saveCampaignData = this.saveCampaignData.bind(this);
        this.moveToCampaignScreen = this.moveToCampaignScreen.bind(this);
        this.handleModelChange = this.handleModelChange.bind(this);
    }

    componentWillMount() {
        this.props.dispatch(getLists(this.props.userId));
    }

    // Binding function to class instance for passing to children
    saveCampaignData(data) { 
        this.setState({data: {...this.state.data, ...data}});
    }

    // Binding function to class instance for passing to children
    sendCampaignData() {
        this.props.dispatch(createCampaign(this.props.userId, this.state.data, this.moveToCampaignScreen));
    }

    // Binding function to class instance for children
    moveToCampaignScreen() {
        this.props.history.push('/dashboard/campaigns');
    }

    // Binding function to class instance for children
    handleModelChange(model) {
        this.setState({content: model});
    }

    handleInputChange(e) {
        this.setState({content: e.target.value});
    }

    passProps(props, yourProps, Component) {
        return <Component {... yourProps} {...props} />;
    }

    render() {

        const { saveCampaignData, sendCampaignData, handleModelChange, handleInputChange } = this;
        const { match, location, history } = this.props;
        const { template } = this.state;

        let loading;
        if (this.props.loading) {
            return (<h3>Loading...</h3>);
        }

        let error;
        if (this.props.message) {
            error = <h3>{this.props.message}</h3>;
        }

        if (!this.props.loading && this.props.lists) {


            return(
                <section>
                    <h1>Campaign Create! </h1>
                    {error}
                    <Route exact path={'/dashboard/campaigns/create'} component={(props) => this.passProps(props, { saveCampaignData }, CampaignCreateForm )} />
                    <Route exact path={'/dashboard/campaigns/create/email'} component={(props) => this.passProps(props, { saveCampaignData, handleModelChange, template }, CampaignCreateBody)} />
                    <Route exact path={'/dashboard/campaigns/create/done'} component={(props) => this.passProps(props, { sendCampaignData }, CampaignEndScreen)} />
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
