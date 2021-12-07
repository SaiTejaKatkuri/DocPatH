import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import {showErrMsg, showSuccessMsg} from '../../utils/notification/Notification'
import {isEmpty, isEmail, isLength, isMatch} from '../../utils/validation/Validation'
// import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../navbar/Navbar';
import './Register.css'
import Footer from '../../footer/Footer';

//import { userActions } from '../_actions';

const initialState = {
    name: '',
    email: '',
    password: '',
    cf_password: '',
    err: '',
    success: ''
}

function Register() {
    const [user, setUser] = useState(initialState)

    const {name, email, password,cf_password, err, success} = user

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUser({...user, [name]:value, err: '', success: ''})
    }


    const handleSubmit = async e => {
        e.preventDefault()
        if(isEmpty(name) || isEmpty(password))
                return setUser({...user, err: "Please fill in all fields.", success: ''})

        if(!isEmail(email))
            return setUser({...user, err: "Invalid emails.", success: ''})

        if(isLength(password))
            return setUser({...user, err: "Password must be at least 6 characters.", success: ''})
        
        if(!isMatch(password, cf_password))
            return setUser({...user, err: "Password did not match.", success: ''})

        try {
            const res = await axios.post('http://localhost:5000/user/register', {
                name, email, password
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

                    <h5>Email</h5>
                    <input type='text' value={email} name="email" onChange={handleChangeInput} />

                    <h5>Password</h5>
                    <input type='password' value={password} name="password" onChange={handleChangeInput} />

                    <h5>Confirm Password</h5>
                    <input type='password' value={cf_password} name="cf_password" onChange={handleChangeInput}/>

                    <button type='submit' className='login__signInButton'>Sign Up</button>
                     <p>Already an account? <Link to="/login">Login</Link></p>
                </form>

                
            </div>
        </div>
        <Footer />
        </>
    )    
}

export default Register;    