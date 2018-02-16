import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';


import Home from './components/Home';
import Dashboard from './components/Dashboard';
import LoginPage from './components/LoginPage';

import DashboardLists from './components/Dashboard_Lists';
import DashboardCampaigns from './components/Dashboard_Campaigns';

import DashboardCampaignView from './components/Dashboard_Campaign_View';
import DashboardListView from './components/Dashboard_List_View';

import DashboardCampaignCreate from './components/Dashboard_Campaign_Create';
import DashboardListCreate from './components/Dashboard_List_Create';

import Report_Event from './components/Report_Event';

export class App extends Component {
    constructor(props){
        super(props);
    }

    render() {
        console.log(this.props.mainBranch);
        return (
            <Router>
                <div className="App">

                    <Route exact path='/' component={Home} />
                    <Route exact path='/loginPage' component={LoginPage} />
                    <Route path='/dashboard' component={Dashboard} />
                    <Route exact path='/dashboard/:page' component={dashboardBranches} />
                    <Route exact path='/dashboard/:page/create' component={createBranches} />
                    <Route exact path='/dashboard/:page/id/:id' component={idBranches} />

                    <Route exact path='/dashboard/campaigns/id/:id/email' component={null} />
                    <Route exact path='/dashboard/campaigns/id/:id/report/:event' component={null} />
                </div>
            </Router>
        );
    }
}


const dashboardBranches = ({match}) => {

    console.log('switching - branches!');
    console.log(match);
    if (match.url === '/dashboard/lists') {
        return <DashboardLists />;
    }

    else if (match.url === '/dashboard/campaigns') {
        return <DashboardCampaigns />;
    }

    return <Home />;
};

const createBranches = ({match, history}) => {

    console.log('switching - create branches!');
    console.log(match);
    if (match.url === '/dashboard/lists/create') {
        return <DashboardListCreate history={history}/>;
    }

    else if (match.url === '/dashboard/campaigns/create') {
        return <DashboardCampaignCreate history={history}/>;
    }

    return <Home />;
};

const idBranches = ({match}) => {

    console.log('switching - id branches!');
    console.log(match);
    if (match.params.page === 'lists') {
        return <DashboardListView id={match.params.id} />;
    }

    else if (match.params.page === 'campaigns') {
        return <DashboardCampaignView id={match.params.id} />;
    }

    return <Home />;
};

App.defualtProps = {

};

const mapStateToProps = Reducers => {
    return {
        actions: Reducers.reducer.actions,
    };
};

export default connect(mapStateToProps)(App);
