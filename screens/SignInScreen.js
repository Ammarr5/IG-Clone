import { View, Text, StyleSheet, StatusBar, Image } from "react-native";
import React from "react";
import SignInForm from "../components/SignIn/SignInForm";
import SignUpFooter from "../components/SignIn/SignUpFooter";
import InstagramBroadLogo from "../components/SignIn/InstagramBroadLogo";

const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.continer}>
      <View
        style={{
          paddingHorizontal: 20,
          width: "100%",
          justifyContent: "center",
        }}
      >
        <InstagramBroadLogo />
        <SignInForm navigation={navigation} />
      </View>
      <SignUpFooter
        toSignUp
        style={{ position: "absolute", bottom: 0 }}
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  continer: {
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    flex: 1,
  },
});

export default SignInScreen;
