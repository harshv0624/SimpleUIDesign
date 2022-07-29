import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icons from "react-native-vector-icons/Ionicons";
import Icons2 from "react-native-vector-icons/MaterialCommunityIcons";
const Header = ({navigation}) => {

  return (
    <View style={styles.wrapper}>
      <View>
        <Image
          style={{
            height: 60,
            width: 60,
            borderRadius: 100,
            marginLeft: 30,
            // marginTop: 10,
          }}
          source={require("../Assets/profile.jpg")}
        />
      </View>

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity>
          <Icons
            name="chatbox-ellipses-outline"
            size={35}
            style={{
              color:'#04040A',
              marginRight: 20,
              marginTop: 13,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icons2
            name="bell-badge-outline"
            color="#040C0C"
            size={35}
            style={{
              marginRight: 20,
              marginTop: 13,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("About")}>
          <Icons
            name="information-circle-outline"
            color="#040C0C"
            size={35}
            style={{
              marginRight: 20,
              marginTop: 13,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapper: {
    // backgroundColor: 'red',
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 30,
  },

  text: {
    color: "black",
  },
});
