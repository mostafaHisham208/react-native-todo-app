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
                style={({pressed})=>[styles.btnContainer2,{opacity:pressed?0.5:1}]}>
                 <Text style={styles.txt}>users</Text>
                </Pressable>
                <Pressable   onPress={()=>{navigate(routes.camera)}}
                style={({pressed})=>[styles.btnContainer2,{opacity:pressed?0.5:1}]}>
                 <Text style={styles.txt}>open Camera</Text>
                </Pressable>
                <Pressable   onPress={()=>{navigate(routes.list)}}
                style={({pressed})=>[styles.btnContainer2,{opacity:pressed?0.5:1}]}>
                 <Text style={styles.txt}>Section List</Text>
                </Pressable>
                <Pressable   onPress={()=>{navigate(routes.todo)}}
                style={({pressed})=>[styles.btnContainer2,{opacity:pressed?0.5:1}]}>
                 <Text style={styles.txt}>todo List</Text>
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
