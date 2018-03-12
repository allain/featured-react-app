import React from 'react'
import LoginForm from './components/LoginForm'
import { Need } from 'react-needs'

export default ({ history }) => (
  <Need value={['users', 'history']}>
    {(users, history) => (
      <div>
        <LoginForm
          error={users.state.error}
          onLogin={creds => users.login(creds).then(() => history.replace('/'))}
        />
      </div>
    )}
  </Need>
)
