import React from 'react'

import { Route } from 'react-router-dom'

import LoginScreen from './LoginScreen'

const UserContent = () => (
  <div>
    User Content
    <Route path="/user/login" component={LoginScreen} />
  </div>
)

export const render = () => (
  <Route key="users-feature" path="/user/" component={UserContent} />
)

export * as reducers from './reducers'
