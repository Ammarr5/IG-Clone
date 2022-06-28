import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import NavBar from "../components/Home/NavBar";
import Header from "../components/Profile/Header";

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation}/>
			<NavBar navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    paddingTop: StatusBar.currentHeight,
    flex: 1,
  },
});

export default ProfileScreen;
