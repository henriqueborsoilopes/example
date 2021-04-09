import axios from "axios";

export function allUsers() {
    return axios('http://localhost:8080/users')
}