export default function authorize(email, password) {
  if (password === 'pass') {
    return Promise.resolve({ id: 1, email, roles: ['admin'] })
  } else {
    return Promise.reject(new Error('invalid.credentials'))
  }
}
