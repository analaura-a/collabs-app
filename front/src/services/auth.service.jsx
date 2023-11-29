import { call } from "./http.service";

export function signup({ email, password }) {
    return call({ uri: "auth/signup", method: "POST", body: { email, password } });
}

export function login({ email, password }) {
    return call({ uri: "auth/login", method: "POST", body: { email, password } });
}

export function logout() {
    return call({ uri: "auth/logout", method: "DELETE" })
}

export function getUserProfile() {
    return call({ uri: "user/profile", method: "GET" })
}

export default {
    signup,
    login,
    logout,
    getUserProfile
}