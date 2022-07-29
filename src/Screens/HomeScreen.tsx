import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import SearchBar from '../Components/SearchBar'
import List from '../Components/List'
const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Header navigation={navigation}/>
        <SearchBar/>  
        <List/>

      </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
})