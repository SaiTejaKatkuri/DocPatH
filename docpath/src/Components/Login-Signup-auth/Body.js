import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './Auth/Login'
import Register from './Auth/Register'
import ActivationEmail from './Auth/activatemail'
import NotFound from '../utils/NotFound/NotFound'

import Option from '../login-Option/Option'
import ForgotPass from './Auth/ForgotPassword'
import ResetPassword from './Auth/ResetPassword'

import {useSelector} from 'react-redux'

function Body() {
    const auth = useSelector(state => state.auth)
    const {isLogged, isAdmin} = auth
    return (
        <section>
            <Switch>
                <Route path="/" component={Option} exact />

                <Route path="/login" component={isLogged ? NotFound : Login} exact />
                <Route path="/register" component={isLogged ? NotFound : Register} exact />

                <Route path="/forgot_password" component={isLogged ? NotFound : ForgotPass} exact />
                <Route path="/user/reset/:token" component={isLogged ? NotFound : ResetPassword} exact />

                <Route path="/user/activate/:activation_token" component={ActivationEmail} exact />

            </Switch>
        </section>
    )
}

export default Body
