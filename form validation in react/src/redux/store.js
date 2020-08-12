import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

let initialState = {
    fullAddress: '',
    city: '',
    state: '',
    country: '',
    zip: ''
    }

const reducer = (state= initialState, action) => {
    let stateCopy = {...state}
    switch (action.type) {
        case 'UPDATE_STATE':
            let key = Object.keys(action.payload)[0]
            stateCopy[key] = action.payload[key]
            console.log(stateCopy)
            return stateCopy;
    
        default:
            return stateCopy;
    }
}

const store = createStore(reducer, applyMiddleware(thunk))
export default store;