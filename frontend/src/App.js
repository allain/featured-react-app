import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import * as features from './features'
import { Provider } from 'react-redux'
import store from './store'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <h1>App Component</h1>
            {Object.values(features).map(f => f.render())}
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
