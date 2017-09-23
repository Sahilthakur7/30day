export const types = {
'FETCH_NEW_TIME': 'FETCH_NEW_TIME'
};
const initialState = {
    currentTime: new Date()
}

export const configureStore = () => {
const store = createStore(currentTime.reducer);
return store;
}

export const actions = {
    updateTime: () => ({type: types.FETCH_NEW_TIME})
}
