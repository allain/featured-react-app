export function login({ email, password }) {
  if (password == 'pass') {
    return loginSuccess({ id: 1, email: email, roles: ['testing'] })
  } else {
    return loginFailure()
  }
}

export function loginSuccess(user) {
  return dispatch =>
    new Promise(resolve => {
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: { user }
      })

      resolve()
    })
}

export function loginFailure() {
  return dispatch => {
    dispatch({
      type: 'LOGIN_FAILURE',
      payload: { error: 'login.fail' }
    })

    return Promise.reject(new Error('login.fail'))
  }
}
