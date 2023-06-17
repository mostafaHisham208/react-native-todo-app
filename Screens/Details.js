import { useRoute } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import {View, StyleSheet, Text,Image} from 'react-native';
import { usersContext } from '../contexts/usersContextProvider';

const Details = () => {
    const {users}=useContext(usersContext)
    const {params}=useRoute();
    const [user,setUser]=useState();
    // console.warn(users)
    useEffect(()=>{
        users.map((obj)=>obj.id===params?setUser(obj):obj)
    },[])
if (!user) return<Text>Loading....</Text>
    return (
        <View style={styles.detailescard}>
           <Image source={{uri:'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'}}  
            style={{width: "100%", height: "70%"}}/>
            <Text>name :  {user.name}</Text>
            <Text>username :  {user.username}</Text>
            <Text>email :  {user.email}</Text>
            <Text>{user.username}</Text>


        </View>
    );
}

const styles = StyleSheet.create({
    detailescard:{
        marginTop:30,
        paddingLeft:10,
        paddingRight:10,
        width:"80%",
        height:400,
        alignSelf:"center",
        alignItems:"flex-end" ,
        justifyContent:"flex-start",
        borderColor:"gray",
        borderWidth:2 ,
        padding:1,
        borderRadius:15
    }
})

export default Details;
