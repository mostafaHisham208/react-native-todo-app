import { useNavigation } from '@react-navigation/native';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,

  SectionList,
  Button,
} from "react-native";
import routes from "../common/routes";
export default function Sectionlistshow({ navigation }) {
  const sections=[
    {
      id:"0",
      title:"A",
      data:[
        {id:"0",text:"Ahmed" ,imag:require("../assets/images/image2.jpg")},
        {id:"1",text:"Amira",imag:require("../assets/images/image1.jpg")},
        {id:"2",text:"Amal",imag:require("../assets/images/image2.jpg")},
      ]
      },
      {
      id:"1",
      title:"B",
      data:[
        {id:"3",text:"Bassem",imag:require("../assets/images/image1.jpg")},
        {id:"4",text:"Basmaa",imag:require("../assets/images/image2.jpg")},
        {id:"5",text:"Badr",imag:require("../assets/images/image1.jpg")},


        
      ]
    },
    {
      id:"2",
      title:"C",
      data:[
        {id:"6",text:"coria",imag:require("../assets/images/image1.jpg")},
        {id:"7",text:"chiste",imag:require("../assets/images/image1.jpg")},
        {id:"8",text:"cirstiano",imag:require("../assets/images/image1.jpg")},


        
      ]
    },
    {
      id:"3",
      title:"D",
      data:[
        {id:"9",text:"Dina",imag:require("../assets/images/image1.jpg")},
        {id:"10",text:"Daly",imag:require("../assets/images/image1.jpg")},
        {id:"11",text:"Dalida",imag:require("../assets/images/image1.jpg")},


        
      ]
    }

    ]
  //  const {navigate}=useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <SectionList sections={sections} 
      renderSectionHeader={({section})=><Text style={styles.headerStyle}>{section.title}</Text>}
      renderItem={({item})=>
      <View  style={styles.cardsection}>
        <View style={styles.cardsectiontext}>
        <Image style={styles.imagestyle} source={item.imag}/>

        <Text style={styles.itemStyle}>{item.text}</Text>
        </View>
        <View >
          <Button title="show" onPress={()=>{ navigation.navigate(routes.showdetails, item) }}></Button>
        </View>
        </View>}
      >
      </SectionList>
     </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container:{

  },
  headerStyle:{
    backgroundColor:"green",
    padding:15,
    color:"white",
    fontWeight:"900"
  },
  cardsectiontext:{
    flexDirection:"row-reverse",

  }
  ,
  imagestyle:{
       width:30,
       height:30,
       borderRadius:10
  },
  itemStyle:{
    // backgroundColor:"gray",
    // marginVertical:10,
    padding:0,
    paddingLeft:15
  },
  cardsection:{
    flexDirection:"row-reverse",
    backgroundColor:"gray",
    marginVertical:1,
     padding:15,
    alignItems:"flex-end",
    justifyContent:"space-between",
    
  }
});
