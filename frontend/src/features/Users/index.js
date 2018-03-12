import React from 'react'

import { Route, Redirect, Link } from 'react-router-dom'
import Feature from '../../lib/Feature'
import LoginScreen from './LoginScreen'
import UsersState from './UsersState/UsersState'
import { SpotContent } from 'react-spots'
import { Need, Offer } from 'react-needs'

export const render = () => (
  <Feature name="users">
    <Offer name="users" value={() => new UsersState()} />
    <SpotContent
      key="logout-button"
      match="/header/top-right"
      component={() => (
        <Need value={['users', 'history']}>
          {(users: UsersState, history) => {
            if (users.state.user)
              return (
                <div className="profile">
                  {users.state.user.email}
                  <button
                    className="ui compact button"
                    onClick={() =>
                      users.logout().then(() => history.replace('/'))
                    }>
                    Logout
                  </button>
                </div>
              )

            console.log(history)

            if (history.location.pathname === '/user/login') return null

            return <Link to="/user/login">Login</Link>
          }}
        </Need>
      )}
    />
    <Route
      path="/user"
      render={() => (
        <Need value="users">
          {users =>
            users.state.user ? (
              <Redirect to="/" />
            ) : (
              <Route path="/user/login" component={LoginScreen} />
            )
          }
        </Need>
      )}
    />
  </Feature>
)
