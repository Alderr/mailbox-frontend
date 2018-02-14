import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';


import Home from './components/Home';
import Dashboard from './components/Dashboard';
import LoginPage from './components/LoginPage';

import DashboardLists from './components/Dashboard_Lists';
import DashboardCampaigns from './components/Dashboard_Campaigns';

import { increaseCount } from './actions/basicActions';

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
                    <Route exact path='/dashboard/:page/:id' component={null} />
                    <Route exact path='/dashboard/:page/create' component={null} />

                </div>
            </Router>
        );
    }
}


let dashboardBranches = ({match}) => {

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

App.defualtProps = {
    actions: 6
};

const mapStateToProps = Reducers => {
    return {
        actions: Reducers.reducer.actions,
        navigate: Reducers.reducer.navigate,
        mainBranch: Reducers.navigateReducer.mainBranch
    };
};

export default connect(mapStateToProps)(App);
