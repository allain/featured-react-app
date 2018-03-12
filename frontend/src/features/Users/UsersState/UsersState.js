import ObservableState from 'observable-react-state'
import authorize from './authorize'
import logout from './logout'

type UserType = {
  id: number,
  email: string,
  roles: Array<string>,
  token: string
}

type StateType = {
  user: UserType,
  error: Error
}

class UserState extends ObservableState<StateType> {
  state = {
    user: null,
    error: null
  }

  login = ({ email, password }) => {
    return authorize(email, password)
      .then(user => {
        this.setState({ user, error: null })
      })
      .catch(err => {
        this.setState({
          user: null,
          error: err
        })
      })
  }

  logout = () => {
    return logout().then(() =>
      this.setState({
        user: null,
        error: null
      })
    )
  }
}

export default UserState
