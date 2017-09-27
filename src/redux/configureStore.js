
import {createStore, combineReducers} from 'redux';
import {rootReducer, initialState} from './reducers';
import {reducer, initialState as userInitialState} from './currentUser';

export const configureStore = () => {
    const store = createStore(
        rootReducer,
        initialState,
    );

  return store;
}

export default configureStore;
