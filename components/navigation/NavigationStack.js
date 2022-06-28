import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/HomeScreen";
import AddPostScreen from "../../screens/AddPostScreen";
import SignInScreen from "../../screens/SignInScreen";
import SignUpScreen from "../../screens/SignUpScreen";
import ForgotPasswordScreen from "../../screens/ForgotPasswordScreen";
import ProfileScreen from "../../screens/ProfileScreen";

const Stack = createStackNavigator();

const options = { headerShown: false };

export const SignedOutStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignInScreen" screenOptions={options}>
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
        />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const SignedInStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions={options}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AddPostScreen" component={AddPostScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};