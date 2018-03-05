import React from 'react'

type Props = {
  onLogin: ({
    email: string,
    password: string
  }) => any,
  error: string
}

type State = {
  email: string,
  password: string
}

class LoginForm extends React.Component<Props, State> {
  state = {
    email: 'allain.lalonde@gmail.com',
    password: 'pass'
  }

  render() {
    const { error } = this.props
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
        {error && <div className="error">{error}</div>}
        <button type="submit">Login</button>
      </form>
    )
  }

  onLogin = e => {
    e.preventDefault()
    this.props.onLogin(this.state)
  }

  onEmailChange = e => this.setState({ email: e.currentTarget.value })
  onPasswordChange = e => this.setState({ password: e.currentTarget.value })
}

export default LoginForm
