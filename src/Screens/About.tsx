import { StyleSheet, Text, View, Image, Dimensions, Platform, StatusBar } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={styles.container}>
      <Image style={{
        resizeMode:'center',
        width:'100%',
        height:'100%'
      }} source={require('../Assets/Resume.jpg')}></Image>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  container:{
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    width:Dimensions.get("window").width,
    height:Dimensions.get("window").height
  }
})