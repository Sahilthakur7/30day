import React, { Component } from 'react';
import './App.css';

const a = [1,10,100,1000];

const App = (props) => {
    return (
        <ul>
        {a.map((i) => {
            return <li key={i}>{i}</li>
        })}
        </ul>
    )
}

export default App;
