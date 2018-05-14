import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNewMessage } from '../store/actions/messages';

class MessageForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
  }
  
  handleNewMessage = e => {
    e.preventDefault();
    this.props.postNewMessage(this.state.text)
    this.setState({ text: '' });
    this.props.history.push('/');
  };
  
  render() {
    return(
      <form onSubmit={ this.handleNewMessage }>
        { this.props.errors.message && (
            <div className="alert alert-danger">
              { this.props.errors.message }
            </div>
          )
        }
        <input type="text" name="text" id="text" className="form-control"
               value={ this.state.text }
               onChange={e => this.setState({ text: e.target.value })}
        />
        <button
          type="submit"
          className="btn btn-success pull-right"
        >
          Add Message
        </button>
      </form>
    )
  }
  
}

const mapStateToProps = ({ errors }) => ({ errors })
export default connect(mapStateToProps, { postNewMessage })(MessageForm);