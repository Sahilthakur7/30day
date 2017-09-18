import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {Router, Route, hashHistory} from 'react-router'


const Home = () => (<div><h1>WELCOME HOME</h1></div>)

export class App extends React.Component {


    render(){

        return(
            <Router history={hashHistory} >
                <Route path="/" component={Home}/>
            </Router>
        )

    } 
}

export default App;
