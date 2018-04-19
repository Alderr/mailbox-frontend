import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import Dashboard from './components/Dashboard';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';

import MainView from './components/MainView';
import DashboardLists from './components/list/Dashboard_Lists';
import DashboardCampaigns from './components/campaign/Dashboard_Campaigns';

import DashboardCampaignView from './components/campaign/Dashboard_Campaign_View';
import DashboardListView from './components/list/Dashboard_List_View';

import DashboardCampaignCreate from './components/campaign/Dashboard_Campaign_Create';
import DashboardListCreate from './components/list/Dashboard_List_Create';
import ContactCreate from './components/list/Contact_Create';

// import Report_Event from './components/Report_Event';

export default class App extends Component {

    render() {

        return (
            <Router>
                <div className="App">

                    <Route exact path='/' component={Home} />
                    <Route exact path='/loginPage' component={LoginPage} />
                    <Route exact path='/register' component={RegisterPage} />

                    <Route path='/dashboard' component={MainView} />
                    <Route exact path='/dashboard' component={Dashboard} />

                    <Route exact path='/dashboard/lists' component={DashboardLists} />
                    <Route exact path='/dashboard/campaigns' component={DashboardCampaigns} />

                    <Route path='/dashboard/lists/create' component={DashboardListCreate} />
                    <Route path='/dashboard/campaigns/create' component={DashboardCampaignCreate} />

                    <Route exact path='/dashboard/lists/id/:id' component={DashboardListView} />
                    <Route exact path='/dashboard/campaigns/id/:id' component={DashboardCampaignView} />

                    <Route exact path='/dashboard/lists/id/:id/createContact' component={ContactCreate} />
                    
                    {/* Not done */}
                    {/* <Route exact path='/dashboard/campaigns/id/:id/email' component={null} /> */}
                    {/* <Route exact path='/dashboard/campaigns/id/:id/report/:event' component={null} /> */}
                </div>
            </Router>
        );
    }
}
