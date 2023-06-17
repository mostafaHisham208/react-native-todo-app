import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text, Button, TextInput,Pressable } from 'react-native';
import routes from '../common/routes';
import { usersContext } from '../contexts/usersContextProvider';
import { ScrollView } from 'react-native-web';
import filter from 'lodash.filter';

const Users = ({ navigation }) => {
    const { users } = useContext(usersContext)
    const [alldata,setalldata] = useState(users)
    const [data,setdata] =useState([])
    const [searchquery, setsearchquery] = useState('');

    useEffect(()=>{
     setdata(alldata)

    },[])
  const handlesearch=(query)=>{
     setsearchquery(query);
     const fquery=query.toLowerCase();
     const filteredData=filter(alldata,(user)=>{
        return contains(user,fquery);
     });
     setdata(filteredData)
     
  }
  const contains=({name,username,email},query)=>{
     username=username.toLowerCase()
     name=name.toLowerCase()
     email=email.toLowerCase()
   if(username.includes(query)||name.includes(query)||email.includes(query)){
      return true;
   }
   return false;
  }
  
 

    return (
        <View>

            <View style={styles.searchview}>
                <TextInput
                    style={styles.search}
                    placeholder="search"
                    clearButtonMode='always'
                    value={searchquery}
                    onChangeText={(query) => handlesearch(query)}
                    autoCapitalize='none'
                    autoCorrect={false}

                />
            </View>

            {data.map((u) => 
            <View key={u.id}  style={styles.carduser}> 
               <View>
                 <Text style={{fontSize:18,color:"white"}}> {u.name}</Text>
                <Text> {u.username}</Text>

               </View>

            
                <View style={{width:"30%"}}>
                <Pressable  onPress={() => { navigation.navigate(routes.details, u.id) }}
                style={({pressed})=>[styles.btnContainer,{opacity:pressed?0.5:1}]}>
                 <Text style={styles.txt}>show details</Text>
                </Pressable>
                </View>
            </View>
            )}
            <View>
               <Pressable  onPress={() => { navigation.pop() }}
                style={({pressed})=>[styles.btnContainer2,{opacity:pressed?0.5:1}]}>
                 <Text style={styles.txt}>back to home</Text>
                </Pressable>
            </View>
           
        </View>
        
    );
}

const styles = StyleSheet.create({
    carduser:{
        borderColor:"white",
        borderWidth:1,
        padding:3,
        flexDirection:"row-reverse",
        justifyContent:"space-between",
        backgroundColor:"#1e418a",
    },
    searchview:{
        width:"100%",
    },
    search: {
        backgroundColor:"white",
        margin: 10,
        borderColor: "gray",
        width: "90%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,

    },
    btnContainer:{
        backgroundColor:"#8fcae7",
        borderRadius:10,
        paddingHorizontal:8,
        paddingVertical:10,
        alignItems: "center",
      },
      btnContainer2:{
        marginTop:30,
        width:"50%",
        backgroundColor:"gray",
        borderRadius:10,
        paddingHorizontal:8,
        paddingVertical:10,
        alignItems: "center",
        alignSelf: "center",
      },
})

export default Users;
