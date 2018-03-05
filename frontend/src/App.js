import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import * as features from './features'

import { Provider as UnstatedProvider } from 'unstated'
import { Spot, SpotProvider } from 'react-spots'
import UserContainer from './features/Users/state'

class App extends React.Component {
  render() {
    return (
      <SpotProvider>
        <UnstatedProvider inject={[new UserContainer()]}>
          <Router>
            <div>
              <div style={{ float: 'right' }}>
                <Spot name="/header/top-right" />
              </div>
              <h1>App Component</h1>
              {Object.values(features).map(f => f.render())}
            </div>
          </Router>
        </UnstatedProvider>
      </SpotProvider>
    )
  }
}

export default App
