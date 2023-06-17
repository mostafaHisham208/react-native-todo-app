import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import {View, StyleSheet} from 'react-native';
export const usersContext=createContext();
const UsersContextProvider = ({children}) => {
    const [users,setUsers]=useState([])
    useEffect(()=>{
        axios.get("http://jsonplaceholder.typicode.com/users")
        .then(res=>setUsers(res.data))
   
    },[])
    return (
       <usersContext.Provider value={{users}} >
            {children}
        </usersContext.Provider>
    );
}

const styles = StyleSheet.create({})

export default UsersContextProvider;
