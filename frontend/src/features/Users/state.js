import { Container } from 'unstated'

class UserContainer extends Container {
  state = {
    user: null,
    error: null
  }

  login = ({ email, password }) => {
    if (password === 'pass') {
      this.setState({
        user: { id: 1, email, roles: ['testing'] },
        error: null
      })

      return Promise.resolve()
    }

    this.setState({
      user: null,
      error: 'invalid.credentials'
    })

    return Promise.reject(new Error('invalid.credentials'))
  }

  logout = () => {
    this.setState({
      user: null,
      error: null
    })
  }
}

export default UserContainer
