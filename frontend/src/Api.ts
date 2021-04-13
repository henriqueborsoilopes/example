import axios from "axios";
import { PostUser } from "./conteúdo/cadastrar/types";

export function allUsers() {
    return axios('http://localhost:8080/users')
}

export function postUsers( user : PostUser) {
    return axios.post('http://localhost:8080/users', user)
}