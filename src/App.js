import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch';
import TimeForm from './TimeForm';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            currentTime: null,
            msg: 'now',
            tz: 'PST'
        }
    }


    fetchCurrentTime() {
        fetch(this.getApiUrl())
        .then(resp => resp.json())
            .then(resp => {
                const currentTime = resp.dateString;
                this.setState({currentTime})
            })
    }
    getApiUrl(){
        const {tz,msg} = this.state;
        const host = 'https://fullstacktime.herokuapp.com';
        return `${host}/${tz}/${msg}.json`;
    }
    handleFormSubmit(){
        this.fetchCurrentTime();
    }

    handleChange(newState){
        this.setState(newState);
    }


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
