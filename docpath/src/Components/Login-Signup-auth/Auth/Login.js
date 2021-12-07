import React, { useState } from 'react';
import './Login.css'
import { Link,  useHistory } from "react-router-dom";
import {showErrMsg, showSuccessMsg} from '../../utils/notification/Notification'
import {dispatchLogin} from '../../../redux/actions/authAction'
import {useDispatch} from 'react-redux';
import axios from 'axios'
import Navbar from '../../navbar/Navbar';
import Register from './Register';
import Footer from '../../footer/Footer';
//import { auth } from "./firebase";

const initialState = {
    email: '',
    password: '',
    err: '',
    success: ''
}


function Login() {
    const [user, setUser] = useState(initialState)
    const dispatch = useDispatch()
    const history = useHistory()
    // const navigate = useNavigate();
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const { email, password, err, success} = user

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUser({...user, [name]:value, err: '', success: ''})
    }


    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await axios.post('/user/login', {email, password})
            setUser({...user, err: '', success: res.data.msg})

            localStorage.setItem('firstLogin', true)

            dispatch(dispatchLogin())
            history.push("/")

        } catch (err) {
            err.response.data.msg && 
            setUser({...user, err: err.response.data.msg, success: ''})
        }
    }

    // const signIn = e => {
    //     e.preventDefault();
    //  }

    
    return (
      <>
      <Navbar />
        <div className='login'>
            <div className='login__container'>
                <h1>Sign-in</h1>
                {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}
                <form onSubmit={handleSubmit}>
                    <h5>E-mail</h5>
                    <input type='text' value={email} name="email" onChange={handleChangeInput} />

                    <h5>Password</h5>
                    <input type='password' value={password} name="password" onChange={handleChangeInput} />
                    <div className="row">
                        <button type='submit' className='login__signInButton'>Sign In</button>
                        <Link to="/forgot_password">Forgot your password?</Link>
                    </div>
                    <p>New Customer? <Link to="/register">Register</Link></p>
                </form>

                
            </div>
        </div>
       <Footer />
        </>
    )
}
    
export default Login;
