
export const isAuthenticated = () => {
  let jwt = localStorage.getItem('token')
if(jwt) {
  return jwt
}
  return false
}
