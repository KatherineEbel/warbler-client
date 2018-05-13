import React, { Component } from 'react';

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      profileImageUrl: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };


  handleSubmit = (e) => {
    e.preventDefault();
    const authType = this.props.signUp ? 'signup' : 'signin';
    this.props.onAuth(authType, this.state)
      .then(() => console.log('LOGGED IN SUCCESSFULLY!'))
  };

  render() {
    const { email, username, password, profileImageUrl } = this.state;
    const { heading, buttonText, signUp } = this.props;
    return (
      <div>
        <div className="row justify-content-md-center">
          <div className="col-md-6">
            <form onSubmit={ this.handleSubmit }>
              <h2 className="text-center">{ heading }</h2>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" id="email"
                       onChange={ this.handleChange }
                       value={ email }
                       className="form-control"
                />
              </div>
              <div className="form-group"> <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password"
                       onChange={ this.handleChange }
                       value={ password }
                       className="form-control"
                />
              </div>
              { signUp && (
                  <div>
                    <div className="form-group"> <label htmlFor="username">Username:</label>
                      <input type="text" name="username" id="username"
                             onChange={ this.handleChange }
                             value={ username }
                             className="form-control"
                      />
                    </div>
                    <div className="form-group"> <label htmlFor="image-url">Image-URL:</label>
                      <input type="text" name="profileImageUrl" id="image-url"
                             onChange={ this.handleChange }
                             value={ profileImageUrl }
                             className="form-control"
                      />
                    </div>
                  </div>
                )
              }
              <button
                className="btn btn-primary btn-block btn-lg"
              >
                { buttonText }
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthForm;