import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import Icon  from "react-native-vector-icons/Ionicons";
import Icon2  from "react-native-vector-icons/Entypo";

const CardLayout = (props) => {
  const { logo, Designation, Salary, Timeperiod, Country, postedDate, Button } =
    props.Car;
  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <View style={{backgroundColor:'#f2f2f1', padding:5,borderRadius:8}}>
          <Image source={logo} style={styles.logo} />
        </View>

        <Text
          style={{
            fontWeight: "900",
            fontSize: 17,
            left:7
          }}
        >
          {Designation}
        </Text>
      </View>

      <View style={styles.row2}>
        <Text style={{
            color:'#808080',
            fontWeight:'600',
            fontSize:14,
        }}>{Salary}</Text>

        <View style={{
            backgroundColor:'#f2f2f1',
            marginLeft:15,
            paddingVertical:5,
            paddingHorizontal:10,
            borderRadius:5,
        }}>
        <Text style={{
            fontSize:10,
            fontWeight:'600'
        }}>{Timeperiod}</Text>

        </View>
      </View>
      <View style={styles.row3}>
        <View style={{flexDirection:'row'}}>
        <Text style={{
            fontSize:13,
            fontWeight:'900'
        }}>{Country}</Text>

        <View style={{
            flexDirection:'row',
            }}>
          <Icon2  color='#808080' name="dot-single" size={20} style={{left:5}}/>
        <Text style={{
            color:'#808080',
            fontWeight:'600'
        }}>{postedDate}</Text>
        </View>

        </View>
        <TouchableOpacity style={{
            backgroundColor:'#026fe3',
            borderRadius:10,
            paddingVertical:7,
            paddingHorizontal:25
            }}>
          <Text style={{
            color:'white',
            fontWeight:'700'
          }}>{Button}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardLayout;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 10,
    margin: 10,
    marginLeft:20,
    marginRight:20,
    elevation: 15,
    borderRadius: 15,
  },

  card: {
    borderRadius: 30,
    backgroundColor: "red",
  },

  row1: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "white",
    alignItems: "center",
    // justifyContent:'space-between'
  },

  row2: {
    flexDirection: "row",
    // paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "white",
    alignItems: "center",
    // justifyContent:'space-between'
  },

  row3: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent:'space-between'
  },

  logo: {
    height: 25,
    width: 25,
  },
});
