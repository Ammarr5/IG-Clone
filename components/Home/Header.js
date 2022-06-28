import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { auth } from "../../firebase";

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => auth.signOut()}>
        <Image
          source={require("../../assets/instagram.png")}
          style={styles.logo}
        />
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={() => navigation.push("AddPostScreen")}>
          <Image
            source={require("../../assets/add.png")}
            style={styles.headerIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../../assets/heart.png")}
            style={styles.headerIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.messagesBadgeContainer}>
            <Text style={styles.messagesBadgeText}>3</Text>
          </View>
          <Image
            source={require("../../assets/messenger.png")}
            style={styles.headerIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "space-between",
  },
  logo: {
    height: 50,
    width: 100,
    resizeMode: "contain",
  },
  iconsContainer: {
    flexDirection: "row",
  },
  headerIcon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    marginLeft: 16,
  },
  messagesBadgeContainer: {
    backgroundColor: "red",
    borderRadius: 100,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: -5,
    top: -5,
    zIndex: 99,
  },
  messagesBadgeText: {
    color: "white",
    fontSize: 13,
  },
});

export default Header;
