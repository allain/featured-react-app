import React from 'react'
import { Router } from 'react-router-dom'
import * as features from './features'
import AppState from './AppState/AppState'
import { createHashHistory } from 'history'

import { Scope, Offer } from 'react-needs'
import { Spot, SpotProvider } from 'react-spots'

const history = createHashHistory()

class App extends React.Component {
  render() {
    return (
      <SpotProvider>
        <Scope>
          <Router history={history}>
            <div className="ui container">
              <Offer name="history" value={history} />
              <Offer name="app" value={() => new AppState()} />

              <div style={{ float: 'right' }}>
                <Spot name="/header/top-right" />
              </div>
              <h1>App Component</h1>
              {Object.values(features).map(f => f.render())}
            </div>
          </Router>
        </Scope>
      </SpotProvider>
    )
  }
}

export default App
