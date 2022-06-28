import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";

const navIcons = [
  {
    name: "HomeScreen",
    defaultImage: require("../../assets/home.png"),
    selectedImage: require("../../assets/home-selected.png"),
    destination: "HomeScreen"
  },
  {
    name: "search",
    defaultImage: require("../../assets/search.png"),
    selectedImage: require("../../assets/search.png"),
    destination: "HomeScreen"
  },
  {
    name: "reels",
    defaultImage: require("../../assets/instagram-reels.png"),
    selectedImage: require("../../assets/instagram-reels-selected.png"),
    destination: "HomeScreen"
  },
  {
    name: "store",
    defaultImage: require("../../assets/store.png"),
    selectedImage: require("../../assets/store-selected.png"),
    destination: "HomeScreen"
  },
  {
    name: "ProfileScreen",
    defaultImage: require("../../assets/profile.png"),
    selectedImage: require("../../assets/profile-selected.png"),
    destination: "ProfileScreen"
  },
];

const NavBar = ({navigation}) => {
  const navState = navigation.getState()
  const [selectedPage, setSelectedPage] = useState(navState.routes[navigation.getState().index].name);
  const handlePress = (name, destination) => {
    setSelectedPage(name);
    navigation.push(destination)
  };
  return (
    <View style={styles.navBarContainer}>
      {navIcons.map((iconData, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handlePress(iconData.name, iconData.destination)}
          style={styles.imageContainer}
        >
          <Image
            source={
              selectedPage === iconData.name
                ? iconData.selectedImage
                : iconData.defaultImage
            }
            style={styles.icon}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  navBarContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "black",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  imageContainer: {
    width: 35,
    height: 35,
    marginRight: 10,
  },
  icon: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default NavBar;
