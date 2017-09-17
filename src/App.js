import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch';
import TimeForm from './TimeForm';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            currentTime: null,
            msg: 'now'
        }
    }


    fetchCurrentTime() {}
    getApiUrl(){}
    handleFormSubmit(){}
    handleChange(newState){}

    render(){
        const {currentTime,tz} = this.state;
        const apiUrl = this.getApiUrl();

        return(
            <div>
            {!currentTime && <button onClick={this.fetchCurrentTime.bind(this)}>
                Get The Current Time
                </button>}
            {currentTime && <div> The Current Time is: {currentTime}</div>}
            <TimeForm 

            onFormSubmit={this.handleFormSubmit.bind(this)}
            onFormChange={this.handleChange.bind(this)}
            tz={tz}
            msg={'now'}
            />
            <p>We making a request from : <code>{apiUrl}</code></p>
            </div>

        )

    }}

export default App;
