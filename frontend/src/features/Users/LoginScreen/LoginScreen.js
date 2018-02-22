import React from 'react'
import { connect } from 'react-redux'
import LoginForm from './components/LoginForm'
import * as actions from '../actions'

class LoginScreen extends React.Component {
  render() {
    const {
      email,
      password,
      onEmailChange,
      onPasswordChange,
      login
    } = this.props

    return (
      <div>
        <LoginForm
          email={email}
          password={password}
          onEmailChange={onEmailChange}
          onPasswordChange={onPasswordChange}
          onLogin={login}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  login: ({ email, password }) => dispatch(actions.login({ email, password }))
})

export default connect(null, mapDispatchToProps)(LoginScreen)
