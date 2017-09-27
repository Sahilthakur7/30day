import * as currentUser from './currentUser';
import * as currentTime from './currentTime';

import {combineReducers} from 'redux';

export const initialState = {

    currentTime: currentTime.initialState,
    currentUser: currentUser.initialState,
}

export const rootReducer =  combineReducers({
    currentTime: currentTime.reducer,
        currentUser: currentUser.reducer
}

)

export default rootReducer;
