
import { APISettings } from "../helpers";
import { User } from "../interfaces";
import {  UsableUsers,UsableUser } from "../types";
import useApi from "./api";

export const getUser = async (id: number | string = ''): UsableUser => {
    let options: object = {
        headers: APISettings.headers
    }
    const { response: user, request } = useApi<User>(
        `${APISettings.baseURL}users/${id}`, options
    );
    await request();
    
    return { user };
    
}

export const getUsers = async (): UsableUsers => {
    let options: object = {
        headers: APISettings.headers
    }
    const { response: users, request } = useApi<User[]>(
        `${APISettings.baseURL}users`, options
    );
    await request();
    
    return { users };
}