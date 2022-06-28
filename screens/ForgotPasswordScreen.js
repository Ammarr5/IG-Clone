import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image } from "react-native";
import React from "react";

const ForgotPasswordScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigation.goBack} style={{paddingHorizontal: 20}}>
        <Image
          source={require("../assets/back.png")}
          style={{ width: 20, height: 20, resizeMode: "contain" }}
        />
      </TouchableOpacity>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
					flex: 1,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
          Ma3lesh 😔
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: "black",
  },
});

export default ForgotPasswordScreen;
