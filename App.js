import { StatusBar } from "expo-status-bar";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Pressable,
  FlatList,
  SectionList,
} from "react-native";
import styles from "./styles";
import { useCallback, useState } from "react";
import Box from "./components/Box";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./Navigation/root";
import UsersContextProvider from "./contexts/usersContextProvider";
export default function App() {

  return (
    <UsersContextProvider>
    <SafeAreaView style={styles.container}>
    <NavigationContainer>
      <Root></Root>
    {/* 
      
     </SafeAreaView> */}
     </NavigationContainer>
     </SafeAreaView>
     </UsersContextProvider>
  );
}


