// Header for authentication
let getCurrentUser = JSON.parse(localStorage.getItem('token'));
if(!getCurrentUser){
    getCurrentUser = {
            accessToken: '',
            response: [
                {
                    // firstName: 'sam'
                }
            ]
    }
}
const userAccessToken = getCurrentUser.accessToken
const currentUserFromLocalStorage = getCurrentUser.response[0]



const authHeader = {
  'Content-Type': 'application/json',
  "Accept": "application/json",
  'Authorization': `basic ${userAccessToken}`
}


export {
  authHeader,
  userAccessToken,
  currentUserFromLocalStorage
}