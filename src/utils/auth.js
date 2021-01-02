const TokenKey = 'Token'
const UserInfoKey = 'User-Info'

export function getToken () {
    return localStorage.getItem(TokenKey)
}

export function setToken (token) {
    if (token) {
        localStorage.setItem(TokenKey, token)
    }
}

export function removeToken () {
    return localStorage.removeItem(TokenKey)
}

export function getUserInfo () {
    return localStorage.getItem(UserInfoKey) === null ? null : JSON.parse(localStorage.getItem(UserInfoKey))
}

export function setUserInfo (userInfo) {
    localStorage.setItem(UserInfoKey, JSON.stringify(userInfo))
}

export function removeUserInfo () {
    return localStorage.removeItem(UserInfoKey)
}
