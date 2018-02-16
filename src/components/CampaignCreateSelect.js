import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Select from 'react-select';

import loginGate from './requires-login-gate';

import { required, nonEmpty } from '../validators';

import 'react-select/dist/react-select.css';

const FLAVOURS = [
    { label: 'Chocolate', value: 'chocolate' },
    { label: 'Vanilla', value: 'vanilla' },
    { label: 'Strawberry', value: 'strawberry' },
    { label: 'Caramel', value: 'caramel' },
    { label: 'Cookies and Cream', value: 'cookiescream' },
    { label: 'Peppermint', value: 'peppermint' },
];

const WHY_WOULD_YOU = [
	{ label: 'Chocolate (are you crazy?)', value: 'chocolate', disabled: true },
].concat(FLAVOURS.slice(1));


export class CampaignCreateSelect extends Component {
    constructor(props){
        super(props);

        this.state = {
            removeSelected: true,
            disabled: false,
            crazy: false,
            stayOpen: false,
            value: [],
            rtl: false,
        };
    }

    onSubmit(values) {
        this.props.createContact(values);
    }

    handleSelectChange = (value) => {
        console.log('You\'ve selected:', value);
        this.props.handleListsValue(value);
        this.setState({ value });
    }

    toggleCheckbox = (e) => {
        this.setState({
            [e.target.name]: e.target.checked,
        });
    }

    render() {
        const options = crazy ? WHY_WOULD_YOU : FLAVOURS;
        const { crazy, disabled, stayOpen, value } = this.state;
        console.log('PROPS===========',this.props);

        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        let message;
        if (this.props.message) {
            message = (
                <div className="form-error" aria-live="polite">
                    {this.props.message}
                </div>
            );
        }
        
        return(
            <section>
                <h1>Hi!</h1>
                <Select
                    closeOnSelect={!stayOpen}
                    disabled={disabled}
                    multi
                    onChange={this.handleSelectChange}
                    options={this.props.lists}
                    placeholder="Select Your List"
                    removeSelected={this.state.removeSelected}
                    simpleValue
                    value={value}
                />
            </section>
        );
    }
}

const mapStateToProps = Reducers => {
    return {
        loggedIn: Reducers.loginReducer.loggedIn,
        userId: Reducers.loginReducer.userId,
        loading: Reducers.userReducer.loading,
        message: Reducers.userReducer.message,
        lists: Reducers.userReducer.listsData.map(list => ({label: list.name, value: list._id}))
    };
};

export default loginGate()(connect(mapStateToProps)(CampaignCreateSelect));
