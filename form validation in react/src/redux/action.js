import axios from 'axios';
const action = {}

action.updateState = (obj) => {
    //{fullName: userGiven}
    return {type: 'UPDATE_STATE', payload: obj}
}

action.makeAPICall = (value) => {
    return (dispatch) => {
        axios.get(`http://photon.komoot.de/api/?q=${value}`)
    .then(response => {
        let details = response.data.features[0].properties;
        dispatch({type: 'UPDATE_STATE', payload: {city: details.city}})
        dispatch({type: 'UPDATE_STATE', payload: {state: details.state}})
        dispatch({type: 'UPDATE_STATE', payload: {country: details.country}})
        dispatch({type: 'UPDATE_STATE', payload: {zip: details.postcode}})
    })
    }
}

export const { updateState, makeAPICall } = action;