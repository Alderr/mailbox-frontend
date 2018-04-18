import React, { Component } from 'react';
import { connect } from 'react-redux';
import loginGate from './requires-login-gate';
import CampaignCreateSelect from './CampaignCreateSelect';

export class CampaignCreateForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            subject: '',
            lists: [],
            sender: 'vernonmensah@gmail.com'
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeLists = this.handleChangeLists.bind(this);
        this.handleChangeSubject = this.handleChangeSubject.bind(this);
        this.handleChangeLists = this.handleChangeLists.bind(this);
        this.saveData = this.saveData.bind(this);
    }

    handleChangeName(e) {
        const value = e.currentTarget.value;
        this.setState({ name: value });
    }

    handleChangeSubject(e) {
        const value = e.currentTarget.value;
        this.setState({ subject: value });
    }

    handleChangeLists(value) {
        const newArr = value.split(',').map(listId => ({ id: listId}));
        this.setState({ lists: newArr });
    }

    saveData() {
        const { name, subject, lists, sender } = this.state;
        this.props.saveCampaignData({ name, subject, lists, sender });
        this.props.history.push('/dashboard/campaigns/create/email');
    }

    render() {

        const { sender } = this.state;

        return(
            <section>
                <div>
                    <label htmlFor="name">Campaign Name:</label>
                    <input type="text" onChange={this.handleChangeName} />
                </div>

                <div>
                    <label htmlFor="subject">Subject Title:</label>
                    <input type="text" onChange={this.handleChangeSubject} />
                </div>

                <div>
                    <label htmlFor="name">Sender:</label>
                    <input type="text" value={sender} readOnly/>
                </div>

                <div>
                    <label htmlFor="name">Lists:</label>
                    <CampaignCreateSelect handleChangeLists={this.handleChangeLists}/>
                </div>

                <button onClick={this.saveData}> Create Email </button>
            </section>
        );


    }
}

const mapStateToProps = Reducers => {
    return {
        lists: Reducers.userReducer.listsData
    };
};

export default loginGate()(connect(mapStateToProps)(CampaignCreateForm));
