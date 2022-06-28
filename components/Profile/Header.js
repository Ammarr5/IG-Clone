import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require("../../assets/back.png")}
          style={styles.headerIcon}
        />
      </TouchableOpacity>
      <Text style={{ fontWeight: "bold", color: "white", fontSize: 22 }}>
        username
      </Text>
      <Image
        source={require("../../assets/ellipsis.png")}
        style={styles.headerIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  headerIcon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    marginLeft: 16,
  },
});

export default Header;
