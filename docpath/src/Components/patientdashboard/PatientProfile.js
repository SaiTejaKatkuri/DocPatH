import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import {showErrMsg, showSuccessMsg} from './utils/notification/Notification'
import {isEmpty, isEmail, isLength, isMatch} from '../../utils/validation/Validation'
// import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';

//import { userActions } from '../_actions';

const initialState = {
    name: '',
    contact_number: '',
    age: '',
    gender: '',
    city: '',
    state: '',
    err: '',
    success: ''
}

function PatientProfile() {
    const [user, setUser] = useState(initialState)

    const {name, contact_number, age,gender, city, state} = user

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUser({...user, [name]:value, err: '', success: ''})
    }


    const handleSubmit = async e => {
        e.preventDefault()
        if(isEmpty(name) || isEmpty(contact_number)|| isEmpty(age) || isEmpty(gender) || isEmpty(city) || isEmpty(state))
                return setUser({...user, err: "Please fill in all fields.", success: ''})

        if(!isEmpty(name))
            return setUser({...user, err: "Please enter name", success: ''})

        if(isEmpty(contact_number))
            return setUser({...user, err: "Please enter Contact Number", success: ''})
        
        if(!isEmpty(age))
            return setUser({...user, err: "Please enter Age", success: ''})
		
		if(!isEmpty(gender))
            return setUser({...user, err: "Please enter Gender", success: ''})
		
		if(!isEmpty(city))
            return setUser({...user, err: "Please enter city", success: ''})
		
		if(!isEmpty(state))
            return setUser({...user, err: "Please enter state", success: ''})

        try {
            const res = await axios.post('http://localhost:5000/user/patientprofile', {
                name, contact_number , age, gender, city, state
            })

            setUser({...user, err: '', success: res.data.msg})
        } catch (err) {
            err.response.data.msg && 
            setUser({...user, err: err.response.data.msg, success: ''})
        }
    }

    
    return (
        <>
        <Navbar />
        <div className='reg'>
            

            <div className='reg__container'>
                <h1>Sign-up</h1>
                {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}
                <form onSubmit={handleSubmit}>
					<h5>Name</h5>
                    <input type='text' value={name} name="name" onChange={handleChangeInput} />

                    <h5>Contact_Number</h5>
                    <input type='text' value={contact_number} name="contact_number" onChange={handleChangeInput} />

                    <h5>Age</h5>
                    <input type='password' value={age} name="age" onChange={handleChangeInput} />

                    <h5>Gender</h5>
                    <input type='password' value={gender} name="gender" onChange={handleChangeInput}/>

					<h5>City</h5>
                    <input type='text' value={city} name="city" onChange={handleChangeInput} />

                    <h5>State</h5>
                    <input type='text' value={state} name="state" onChange={handleChangeInput} />

                   <button>Submit</button>

                    
                </form>

                
            </div>
        </div>
        <Footer />
        </>
    )    
}

export default PatientProfile;    