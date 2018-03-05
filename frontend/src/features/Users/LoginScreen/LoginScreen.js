import React from 'react'
import LoginForm from './components/LoginForm'
import UserContainer from '../state'
import { Subscribe } from 'unstated'

export default ({ history }) => (
  <Subscribe to={[UserContainer]}>
    {users => (
      <div>
        <LoginForm error={users.state.error} onLogin={users.login} />
      </div>
    )}
  </Subscribe>
)
