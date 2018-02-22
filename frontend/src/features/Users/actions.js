export function login({ email, password }) {
  return dispatch => {
    // if (email === 'a@b.com') {
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: { user: { id: 1, email: email, roles: ['testing'] } }
    })
    // }
  }
}
