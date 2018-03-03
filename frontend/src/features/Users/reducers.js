export const LOGIN_SUCCESS = (state, { user }) => ({
  ...state,
  user,
  errors: { ...state.errors, user: null }
})

export const LOGIN_FAILURE = (state, { error } = {}) => ({
  ...state,
  errors: {
    user: error
  }
})
