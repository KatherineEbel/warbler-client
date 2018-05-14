import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ComponentToBeRendered) => {
  class Authenticate extends Component {
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.props.history.push('/signin')
      }
    }
  
    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.props.history.push('/signin')
      }
    }
    
    render() {
      return <ComponentToBeRendered { ...this.props } />
    }
  }
  
  const mapStateToProps = ({ currentUser }) => ({
    isAuthenticated: currentUser.isAuthenticated
  });
  
  return connect(mapStateToProps)(Authenticate);
}


