import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import loginGate from './requires-login-gate';

// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/themes/dark.min.css';

// Require Font Awesome.
import 'font-awesome/css/font-awesome.css';

//require devices
import '../css/devices.min.css';

//CSS
import '../css/campaignCreateBody.css';

import FroalaEditor from 'react-froala-wysiwyg';
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';

import $ from 'jquery';
window.$ = $;

export class CampaignCreateBody extends Component {
    constructor(props){
        super(props);
        this.keyDownTimer;

        this.state = {
            content: props.template,
        };

        this.config = {
            height: 900,
            heightMin: 300,
            // iframe: true,
            // fullPage: true,
            // htmlAllowedTags: ['.*'],
            // // htmlAllowedEmptyTags: ['html','head', 'body','table', 'strong', 'p', 'h1', 'div', 'h2','a'],
            htmlRemoveTags: ['script'],
            lineBreakerTags: [''],
            lineBreakerOffset: 0,
            linkAlwaysBlank: true,
            linkText: true,
            fullPage: true,
            lineBreakerOffset: 0,
            lineBreakerTags: [''],
            toolbarButtons: [
                'html',
                'fullScreen',
                'bold',
                'italic',
                'underline',
                'paragraphFormat',
                'align',
                'subscript',
                'superscript',
                'fontFamily',
                'color',
                'fontSize',
                'undo',
                'redo',
                'insertImage'
            ],
            toolbarButtonsXS: [
                'html',
                'fullScreen',
                'bold',
                'italic',
                'underline',
                'fontFamily',
                'color',
                'fontSize',
                'undo',
                'redo',
                'insertImage'
            ],
            toolbarButtonsMD: [
                'html',
                'fullScreen',
                'bold',
                'italic',
                'underline',
                'strikeThrough',
                'subscript',
                'superscript',
                'fontFamily',
                'color',
                'fontSize',
                'undo',
                'redo',
                'insertImage'
            ],
            toolbarButtonsSM: [
                'html',
                'fullScreen',
                'bold',
                'italic',
                'underline',
                'strikeThrough',
                'subscript',
                'superscript',
                'fontFamily',
                'color',
                'fontSize',
                'undo',
                'redo',
                'insertImage'
            ],
            theme: 'dark',
            events: {

                'froalaEditor.initialized': function(e, editor) {
                    console.log('initialized');
                    console.log(editor);
                    console.log(editor.selection.get());
                    editor.codeView.toggle();

                    /* two listeners that wait till user doesnt type for 2 secs
                      and updateS screen*/
                    document.querySelector('.main').addEventListener('keyup', () => {
                        console.log('create!');
                        clearTimeout(this.keyDownTimer);

                        if (editor.codeView.isActive()){

                            this.keyDownTimer = setTimeout(() => {

                                //get html from codeview & set it for reg. view
                                editor.html.set(editor.codeView.get());

                                //focus cursor back to the end of the HTML & show it
                                editor.selection.setAtEnd(document.querySelector('.fr-code'));
                                editor.selection.restore();

                            }, 3 * 1000); //2 sec

                        }

                    });

                    document.querySelector('.main').addEventListener('keydown', () => {
                        console.log('delete it!');

                        if (editor.codeView.isActive()){
                            console.log('delete it!');
                            clearTimeout(this.keyDownTimer);

                        }

                    });

                },
                'froalaEditor.html.get': function(e, editor, html) {
                    console.log('Getting!');

                }
            }
        };

    }
    saveData = () => {
      this.props.saveCampaignData({html: this.state.content});
      this.props.history.push('/dashboard/campaigns/create/done');
    }

    handleModelChange = (model) => {
      console.log(model);
      this.setState({content: model})
    }

    render() {

        const {  } = this.props;
        const { handleModelChange } = this;
        const { content } = this.state;

        return (
        <div className='main'>
            <div>
              <button onClick={() => this.saveData()}>Save me!</button>
            </div>
            <div className='editorBox'>
                <FroalaEditor tag='div' config={this.config} model={content} onModelChange={(model) => handleModelChange(model)}/>
            </div>
            <div className='codePreview'>
                <div className="marvel-device iphone-x">
                    <div className="notch">
                        <div className="camera"></div>
                        <div className="speaker"></div>
                    </div>
                    <div className="top-bar"></div>
                    <div className="sleep"></div>
                    <div className="bottom-bar"></div>
                    <div className="volume"></div>
                    <div className="overflow">
                    </div>
                    <div className="inner-shadow"></div>
                    <div className="screen">
                        <div className='content'>
                            <FroalaEditorView model={content}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>);
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
