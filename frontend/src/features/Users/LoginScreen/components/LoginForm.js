import React from 'react'

type Props = {
  email: string,
  password: string,
  onLogin: void => any,
  onEmailChange: string => any,
  onPasswordChange: string => any
}

class LoginForm extends React.Component<Props> {
  state = {
    email: '',
    password: ''
  }

  render() {
    const { email, password } = this.state

    return (
      <form onSubmit={this.onLogin}>
        <input
          value={email}
          type="email"
          onChange={this.onEmailChange}
          placeholder="email"
        />
        <input
          value={password}
          type="password"
          onChange={this.onPasswordChange}
          placeholder="password"
        />
        <button type="submit">Login</button>
      </form>
    )
  }

  onLogin = e => {
    e.preventDefault()
    const { onLogin } = this.props
    const { email, password } = this.state

    onLogin && onLogin({ email, password })
  }

  onEmailChange = e => this.setState({ email: e.currentTarget.value })
  onPasswordChange = e => this.setState({ password: e.currentTarget.value })
}

export default LoginForm
