import { useState, useEffect } from 'react';
import * as API from '../utils/api.js';
import UserCard from './UserCard';

export default function Login () {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        API.fetchAllUsers()
        .then((usersData) => {
            setUsers(usersData);
            setUsers((currentUsersData) => {
                const copyOfCurrentUsers = [...currentUsersData];
                copyOfCurrentUsers.push(usersData);
                return copyOfCurrentUsers;
            })
        })
        setIsLoading(false);
    }, [])

    // isLoading ?  <h1> Currently Loading Users </h1> :
    // (
    //     <ul>
    //         {users.map(({ username, avatar_url, kudos }, index) => {
    //             return <li key={index}> <p>{username}</p> </li>
    //         })}
    //     </ul>
    // )

    if(isLoading) return (
        <h1> Currently Loading Users </h1>
    )

    else {
        return (
            <ul className="grid grid-cols-3 gap-0.5 justify-center">
                {users.map(({ username, avatar_url, kudos }, index) => {
                    return <li key={index}> <UserCard username={username} avatar_url={avatar_url} kudos={kudos} /></li>
                })}
            </ul>
        )
    }
}