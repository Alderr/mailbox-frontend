import React, { Component } from 'react';
import { connect } from 'react-redux';
import loginGate from './requires-login-gate';
import CampaignCreateSelect from './CampaignCreateSelect';


import { Link } from 'react-router-dom';

export class CampaignCreateForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            subject: '',
            listsSelected: [],
        };

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
      let newArr = value.split(',');
      this.setState({listsSelected: newArr});
    }

    saveData() {
      console.log('saving dataaaa!');
      const { name, subject, listsSelected } = this.state;
      this.props.saveCampaignData({name, subject, listsSelected});
      this.props.history.push('/dashboard/campaigns/create/email');
    }


    render() {
        console.log('PROPS!', this.props);

        return(
            <section>
                <div>
                    <label htmlFor="name">Campaign Name:</label>
                    <input type="text" onChange={e => this.handleChangeName(e.currentTarget.value)} />
                </div>

                <div>
                    <label htmlFor="subject">Subject Title:</label>
                    <input type="text" onChange={e => this.handleChangeSubject(e.currentTarget.value)} />
                </div>

                <div>
                    <label htmlFor="name">Sender:</label>
                    <input type="text" placeholder='vernonmensah@gmail.com' readOnly/>
                </div>

                <div>
                    <label htmlFor="name">Lists:</label>
                    <CampaignCreateSelect handleChangeLists={e => this.handleChangeLists(e)}/>
                </div>

                <button onClick={() => this.saveData()}> Create Email </button>


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
