import React from 'react'
import { connect } from 'react-redux'
import LoginForm from './components/LoginForm'
import * as actions from '../actions'
import prop from 'propper'

const noop = () => {}

class LoginScreen extends React.Component {
  render() {
    const {
      email,
      password,
      error,
      onEmailChange,
      onPasswordChange,
      login
    } = this.props

    return (
      <div>
        <LoginForm
          email={email}
          password={password}
          error={error}
          onEmailChange={onEmailChange}
          onPasswordChange={onPasswordChange}
          onLogin={login}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    error: prop(state, 'errors.user')
  }
}

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    login: ({ email, password }) =>
      dispatch(actions.login({ email, password })).then(
        () => history.replace('/'),
        noop
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
