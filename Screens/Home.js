import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {  Text,Pressable } from 'react-native';
import {View, StyleSheet} from 'react-native';
import routes from '../common/routes';


const Home = () => {
    const {navigate}=useNavigation();
    return (
        <View>
               <Pressable   onPress={()=>{navigate(routes.users)}}
                style={({pressed})=>[styles.btnContainer2,{opacity:pressed?0.5:1,backgroundColor:"#0b3173"}]}>
                 <Text style={styles.txt}>Users</Text>
                </Pressable>
                <Pressable   onPress={()=>{navigate(routes.list)}}
                style={({pressed})=>[styles.btnContainer2,{opacity:pressed?0.5:1,backgroundColor:"#46212a"}	]}>
                 <Text style={styles.txt}>Section List</Text>
                </Pressable>
                <Pressable   onPress={()=>{navigate(routes.camera)}}
                style={({pressed})=>[styles.btnContainer2,{opacity:pressed?0.5:1,backgroundColor:"#95205d"}]}>
                 <Text style={styles.txt}>Open Camera</Text>
                </Pressable>
               
                <Pressable   onPress={()=>{navigate(routes.todo)}}
                style={({pressed})=>[styles.btnContainer2,{opacity:pressed?0.5:1,backgroundColor:"#e27e91"}]}>
                 <Text style={styles.txt}>Todo Screen</Text>
                </Pressable>
        
        </View>
    );
}

const styles = StyleSheet.create({
    btnContainer2:{
        marginTop:30,
        width:"50%",
        backgroundColor:"black",
        borderRadius:10,
        paddingHorizontal:8,
        paddingVertical:10,
        alignItems: "center",
        alignSelf: "center",
    },
    txt:{
        fontSize:20,
        color:"white",
    }
})

export default Home;
