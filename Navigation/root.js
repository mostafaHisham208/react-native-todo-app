import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Home from '../Screens/Home';
import Users from '../Screens/Users';
import routes from '../common/routes';
import Details from '../Screens/Details';
import Camera from '../Screens/Camera';
import Sectionlistshow from '../Screens/secList';
import Detailslist from '../Screens/detailslist';
import Todo from '../Screens/todo';
const stack=createNativeStackNavigator();
const Root = () => {
    return (
        <stack.Navigator>
       <stack.Screen name={routes.home} component={Home} options={{
        headerTitle:"Home " ,
     
        headerTitleAlign:"center",
        headerTitleStyle:{fontSize:30}
       }}></stack.Screen>

       <stack.Screen name={routes.users} component={Users}></stack.Screen>
       <stack.Screen name={routes.details} component={Details}></stack.Screen>
       <stack.Screen name={routes.camera} component={Camera}></stack.Screen>
       <stack.Screen name={routes.list} component={Sectionlistshow}></stack.Screen>
       <stack.Screen name={routes.todo} component={Todo}></stack.Screen>

       <stack.Screen name={routes.showdetails} component={Detailslist}></stack.Screen>
       
       
       </stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default Root;
