import { View, Text, TextInput, StyleSheet, Pressable, Alert } from "react-native";
import React from "react";
import { Formik } from "formik";
import { object, string } from "yup";
import {auth} from "../../firebase"
import {signInWithEmailAndPassword} from "firebase/auth"

const schema = object().shape({
  email: string().required("Email missing").email("Not a valid email"),
  password: string().required("Password missing"),
});

const SignInForm = ({navigation}) => {
  const onSubmit = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      console.log("welcome 🔥");
    } catch(error) {
      Alert.alert("Error", error.message)
    }
  }
  return (
    <View>
      <Formik
        onSubmit={(values) => onSubmit(values.email, values.password)}
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
				validateOnMount
      >
        {({
          values,
          errors,
          isValid,
          handleSubmit,
          handleBlur,
          handleChange,
        }) => (
          <>
            <TextInput
              placeholder="Email"
              placeholderTextColor="#8B8B8B"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              style={styles.inputField}
              value={values.email}
              textContentType="emailAddress"
              keyboardType="email-address"
            />
            <TextInput
              placeholder="Password"
							placeholderTextColor="#8B8B8B"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              style={styles.inputField}
              value={values.password}
              textContentType="password"
            />
						<Pressable onPress={() => navigation.push("ForgotPasswordScreen")}>
							<Text style={{color: "#307ED8", alignSelf: "flex-end", fontWeight: "bold"}}>Forgot password?</Text>
						</Pressable>

						<Pressable disabled={!isValid} onPress={handleSubmit} style={styles.submitButton(isValid)}>
							<Text style={styles.submitText(isValid)}>Log In</Text>
						</Pressable>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    color: "white",
    marginBottom: 20,
		width: "100%",
		backgroundColor: "#222222",
		padding: 10,
		borderRadius: 3,
  },
	submitButton: (isValid) => ({
		backgroundColor: isValid ?"#307ED8" : "#2A5E99",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 30,
		padding: 10,
		borderRadius: 3
	}),
	submitText:(isValid) => ({
		color: isValid ? "white" : "#A8A8A8",
		fontWeight: "bold",
		fontSize: 16
	})
});

export default SignInForm;
