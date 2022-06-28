import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const SignUpFooter = ({ navigation, style, toSignUp }) => {
  return (
    <View style={[style, styles.container]}>
      <Text style={{color: "white", marginRight: 10}}>{toSignUp ? "Don't have an account?" : "Already have an account?"}</Text>
      <Pressable onPress={() => navigation.push(toSignUp ? "SignUpScreen" : "SignInScreen")}>
        <Text style={{ color: "#307ED8" }}>{toSignUp ? "Sign Up" : "Sign In"}.</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
		flexDirection: "row",
		borderTopWidth: 0.2,
		borderTopColor: "#797979",
		width: "100%"
  },
});

export default SignUpFooter;
