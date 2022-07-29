import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";

const SearchBar = () => {
  return (
    <View style={styles.wrapper}>
      <View
        style={{
          flexDirection: "row",
          width: "90%",
          marginBottom: 10,
        }}
      >
        <Icon
          name="search-outline"
          size={22}
          style={{
            marginTop: 16,
            left: 35,
            zIndex: 1,
          }}
        />
        <TextInput
          style={styles.searchBox}
          placeholder="Search"
          placeholderTextColor="#808080"
        ></TextInput>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            backgroundColor: "#f2f2f1",
            right: 115,
            paddingHorizontal: 20,
            paddingVertical: 7,
            margin: 10,
            paddingRight: 10,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "700",
              right: 10,
              fontFamily: "Poppins_200ExtraLight_Italic",
            }}
          >
            Job
          </Text>
          <Icon
            name="chevron-down"
            size={20}
            style={{
              marginLeft: 15,
              left: 5,
            }}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "white",
          elevation: 20,
          height: "83%",
          right: 35,
          borderRadius: 10,
          top: 2,
        }}
      >
        <Icon2
          name="filter-menu-outline"
          color="#04040A"
          size={25}
          style={{
            margin: 15,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 20,
    flexDirection: "row",
  },

  searchBox: {
    backgroundColor: "white",
    width: "80%",
    borderRadius: 10,
    paddingHorizontal: 40,
    paddingVertical: 10,
    elevation: 15,
    zIndex: -1,
    fontWeight: "900",
  },
});
