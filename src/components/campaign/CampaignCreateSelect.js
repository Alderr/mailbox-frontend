import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';

import loginGate from '../requires-login-gate';

import 'react-select/dist/react-select.css';

export class CampaignCreateSelect extends Component {
    constructor(props){
        super(props);

        this.state = {
            removeSelected: true,
            disabled: false,
            stayOpen: false,
            value: [],
            rtl: false,
        };

        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.toggleCheckbox = this.toggleCheckbox.bind(this);
    }

    handleSelectChange(value) {
        this.props.handleChangeLists(value);
        this.setState({ value });
    }

    toggleCheckbox(e) {
        this.setState({
            [e.target.name]: e.target.checked,
        });
    }

    render() {
        const { disabled, stayOpen, value } = this.state;

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
                {error}
                {message}
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
