import ObservableState from 'observable-react-state'

class AppState extends ObservableState {
  constructor({ history } = {}) {
    super()
    this.state = {
      history
    }
  }

  redirect(path, push = true) {
    this.state.history[push ? 'push' : 'replace'](path)
  }
}

export default AppState
