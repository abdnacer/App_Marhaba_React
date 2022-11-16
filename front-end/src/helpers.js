


export const isAuthenticated = () => {
  let jwt = localStorage.getItem('token')
if(jwt) {
  return jwt
}
  return false
}

export const isClient = () => {
  let role = localStorage.getItem('role')
  if(role == 'client'){
    return role
  }else return false
  
}

