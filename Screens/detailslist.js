import { View, Text,Image } from 'react-native'
import React from 'react'

export default function Detailslist({route}) {
    const item =route.params;
  return (
    <View style={{ marginTop:30,justifyContent:"center" ,alignItems:"center"}}>
      <Image source={item.imag}  style={{ width:250,height:250}}></Image>  
      <Text>{item.text}</Text>
      <Text>{item.id}</Text>

    </View>
  )
}