import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Homepage from '../components/Homepage'
import AuthForm from '../components/AuthForm'
import { authUser } from '../store/actions/auth';
import { removeError } from '../store/actions/errors';
import withAuth from '../hocs/withAuth'
import MessageForm from '../containers/MessageForm';

export const Main = ({ authUser, errors, removeError, currentUser }) => (
  <div className="container">
    <Switch>
      <Route
        exact path="/"
        render={ props => <Homepage currentUser={ currentUser } { ...props } />}
      />
      <Route exact path="/signin"
             render={props => (
               <AuthForm
                 errors={ errors }
                 removeError={ removeError }
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
                 errors={ errors }
                 removeError={ removeError }
                 onAuth={ authUser }
                 buttonText="Sign me up" { ...props }
                 heading="Join Today!"
               />
             )}
      />
      <Route
        path="/users/:id/messages/new"
        component={ withAuth(MessageForm)}
      />
    </Switch>
  </div>
);

const mapStateToProps = ({ currentUser, errors }) => ({ currentUser, errors });

export default withRouter(connect(mapStateToProps, { authUser, removeError })(Main));