import React from 'react';
import { connect } from 'react-redux';
import { updateState, makeAPICall } from './../redux/action';

function Form(props) {
    return (
        <section style={{width: '50%', margin: 'auto'}}>
            <input type='text' name='fullAddress' placeholder='Full address' className='form-control'
            value={props.fullAddress}
            onChange={(e) => props.updateState({[e.target.name]: e.target.value})}
            onBlur={(e) => props.makeAPICall(e.target.value)}/>
            <input type='text' name='city' placeholder='City' className='form-control'
            value={props.city}
            onChange={(e) => props.updateState({[e.target.name]: e.target.value})}/>
            <input type='text' name='state' placeholder='State' className='form-control'
            value={props.state}
            onChange={(e) => props.updateState({[e.target.name]: e.target.value})}/>
            <input type='text' name='country' placeholder='Country' className='form-control'
            value={props.country}
            onChange={(e) => props.updateState({[e.target.name]: e.target.value})}/>
            <input type='text' name='zip' placeholder='Zip code' className='form-control'
            value={props.zip}
            onChange={(e) => props.updateState({[e.target.name]: e.target.value})}/>
        </section>
    )
}

const mapStateToProps = (reducState) => {
    let {fullAddress, city, state, country, zip} = reducState;
    return {
        fullAddress, city, state, country, zip
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateState: (obj) => dispatch(updateState(obj)), // action obj
        makeAPICall: (query) => dispatch(makeAPICall(query)) // function
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);