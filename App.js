import {
  SafeAreaView,StyleSheet

} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import Root from "./Navigation/root";
import UsersContextProvider from "./contexts/usersContextProvider";
export default function App() {

  return (
    <UsersContextProvider>
    <SafeAreaView style={styles.container}>
    <NavigationContainer>
      <Root></Root>

     </NavigationContainer>
     </SafeAreaView>
     </UsersContextProvider>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,

    marginTop: Platform.OS === "android" ? 40 : 0,
  }
})


