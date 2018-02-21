import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import ReactSummernote from 'react-summernote';
import loginGate from './requires-login-gate';

import 'font-awesome/css/font-awesome.css';

// import 'bootstrap/js/modal';
// import 'bootstrap/js/dropdown';
// import 'bootstrap/js/tooltip';
// import 'bootstrap/dist/css/bootstrap.css';

import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/css/froala_editor.pkgd.min.css';

export class CampaignCreateBody extends Component {
    constructor(props){
        super(props);

        this.state = {
            value: '',
            content: '<span>My Document\'s Title</span>',
            config: {
              toolbarButtons: ['undo', 'redo', 'bold', 'italic', 'underline'],
              toolbarButtonsXS: ['undo', 'redo', 'bold', 'italic', 'underline'],
              toolbarButtonsMD: ['undo', 'redo', 'bold', 'italic', 'underline'],
              toolbarButtonsSM: ['undo', 'redo', 'bold', 'italic', 'underline']
            }
        };
    }

    onChange = (content) => {
        //this.setState({value: content});
        console.log('onChange', content);

    }

    onSubmit(values) {
        this.props.createContact(values);
    }

    handleModelChange = (model) => {
     this.setState({
       content: model
     });
 }


    render() {

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
            <div>
              <h1>Campaign-Body!!</h1>
                <button><Link to='/dashboard/campaigns'> Send Campaign! </Link></button>
            </div>
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

export default loginGate()(connect(mapStateToProps)(CampaignCreateBody));
