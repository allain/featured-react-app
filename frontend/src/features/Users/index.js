import React from 'react'

import { Route } from 'react-router-dom'

import Feature from '../../lib/Feature'

import LoginScreen from './LoginScreen'

const UserContent = () => (
  <div>
    User Content
    <Route path="/user/login" component={LoginScreen} />
  </div>
)

export const render = () => (
  <Feature key="users" name="Users">
    <Route path="/user/" component={UserContent} />
  </Feature>
)

export * as reducers from './reducers'
