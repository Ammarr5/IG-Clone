import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import InstagramBroadLogo from "../components/SignIn/InstagramBroadLogo";
import SignUpForm from "../components/SignUp/SignUpForm";
import SignUpFooter from "../components/SignIn/SignUpFooter";

const SignUpScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: 20}}>
        <InstagramBroadLogo />
        <SignUpForm />
      </View>
			<SignUpFooter toSignUp={false} style={{position: "absolute", bottom: 0}} navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
  },
});

export default SignUpScreen;
