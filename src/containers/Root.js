import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from '../redux/configureStore';
// Using ES6 destructuring of the `props`
// variable so we just get the values of `store`
// and `actions`:
export const Root = (props) => {
const store = configureStore();
    return (
        <Provider store={store}>
        <App  />
        </Provider>
    );
}
export default Root;
