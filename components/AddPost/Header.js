import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigation.goBack}>
        <Image
          source={require("../../assets/back.png")}
          style={{ width: 20, height: 20, resizeMode: "contain" }}
        />
      </TouchableOpacity>
      <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
        New Post
      </Text>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight + 10,
    paddingBottom: 10
  },
});

export default Header;
