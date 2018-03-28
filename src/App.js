import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import Dashboard from './components/Dashboard';
import LoginPage from './components/LoginPage';

import MainView from './components/MainView';
import DashboardLists from './components/Dashboard_Lists';
import DashboardCampaigns from './components/Dashboard_Campaigns';

import DashboardCampaignView from './components/Dashboard_Campaign_View';
import DashboardListView from './components/Dashboard_List_View';

import DashboardCampaignCreate from './components/Dashboard_Campaign_Create';
import DashboardListCreate from './components/Dashboard_List_Create';
import ContactCreate from './components/Contact_Create';

import Report_Event from './components/Report_Event';

export default class App extends Component {
    constructor(props){
        super(props);
    }

    render() {

        return (
            <Router>
                <div className="App">

                    <Route exact path='/' component={Home} />
                    <Route exact path='/loginPage' component={LoginPage} />
                    <Route path='/dashboard' component={MainView} />
                    <Route exact path='/dashboard' component={Dashboard} />

                    <Route exact path='/dashboard/:page' component={dashboardBranches} />
                    <Route path='/dashboard/:page/create' component={createBranches} />

                    <Route exact path='/dashboard/:page/id/:id' component={idBranches} />
                    <Route exact path='/dashboard/lists/id/:id/createContact' component={ContactCreate} />
                    
                    {/* Not done */}
                    <Route exact path='/dashboard/campaigns/id/:id/email' component={null} />
                    <Route exact path='/dashboard/campaigns/id/:id/report/:event' component={null} />
                </div>
            </Router>
        );
    }
}


const dashboardBranches = (props) => {
    const { match } = props;

    if (match.url === '/dashboard/lists') {
        return <DashboardLists />;
    }

    else if (match.url === '/dashboard/campaigns') {
        return <DashboardCampaigns />;
    }

    return <Home />;
};

const createBranches = (props) => {

    const { match } = props;

    if (match.url === '/dashboard/lists/create') {
        return <DashboardListCreate {...props} />;
    }

    else if (match.url === '/dashboard/campaigns/create') {
        return <DashboardCampaignCreate {...props} />;
    }

    return <Home />;
};

const idBranches = (props) => {
    const { match } = props;
 
    if (match.params.page === 'lists') {
        return <DashboardListView id={match.params.id} />;
    }

    else if (match.params.page === 'campaigns') {
        return <DashboardCampaignView id={match.params.id} />;
    }

    return <Home />;
};
