import React from 'react'

import { Route, Redirect, Link } from 'react-router-dom'
import { Subscribe } from 'unstated'
import Feature from '../../lib/Feature'
import LoginScreen from './LoginScreen'
import UserContainer from './state'
import { SpotContent } from 'react-spots'

export const render = () => (
  <Feature key="users" name="Users">
    <Subscribe to={[UserContainer]}>
      {users => (
        <React.Fragment>
          {users.state.user ? (
            <SpotContent
              key="logout-button"
              match="/header/top-right"
              component={() => (
                <div className="profile">
                  {users.state.user.email}
                  <button onClick={users.logout}>Logout</button>
                </div>
              )}
            />
          ) : (
            <SpotContent
              key="login-button"
              match="/header/top-right"
              component={() => <Link to="/user/login">Login</Link>}
            />
          )}
          <Route
            path="/user"
            render={() =>
              users.state.user ? (
                <Redirect to="/" />
              ) : (
                <Route path="/user/login" component={LoginScreen} />
              )
            }
          />
        </React.Fragment>
      )}
    </Subscribe>
  </Feature>
)
