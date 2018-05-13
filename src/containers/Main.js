import React from 'react'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Homepage from '../components/Homepage'
import AuthForm from '../components/AuthForm'
import { authUser } from '../store/actions/auth';

export const Main = ({ authUser }) => (
  <div className="container">
    <Switch>
      <Route
        exact path="/"
        render={ props => <Homepage { ...props } />}
      />
      <Route exact path="/signin"
             render={props => (
               <AuthForm
                 onAuth={ authUser }
                 buttonText="Log in" { ...props }
                 heading="Welcome Back"
               />
             )}
      />
      <Route exact path="/signup"
             render={props => (
               <AuthForm
                 signUp
                 onAuth={ authUser }
                 buttonText="Sign me up" { ...props }
                 heading="Join Today!"
               />
             )}
      />
    </Switch>
  </div>
);

const mapStateToProps = state => ({ currentUser: state.currentUser });

export default withRouter(connect(mapStateToProps, { authUser })(Main));