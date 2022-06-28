import {
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";
import React from "react";
import { Formik } from "formik";
import { object } from "yup";
import { string } from "yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import {collection, setDoc, doc, addDoc} from "firebase/firestore"

const schema = object().shape({
  email: string().required("Enter your email").email("Invalid email"),
  username: string().required("Enter a username"),
  password: string()
    .required("Enter a password")
    .matches(
      /^.*(?=.{7,})((?=.*[~!@#$%^&*()_\-+=?;:])+)(?=.*[A-Z]+)(?=.*[a-z]+)(?=.*[0-9]+).*$/,
      "Password must be at least 7 characters containing upper and lower cases an at least one number"
    ),
});

const SignUpForm = () => {
  const onSubmit = async (email, password, username) => {
    try {
      const newUser = await createUserWithEmailAndPassword(auth, email, password);
      const userRef = doc(db, "users", newUser.user.uid);
      console.log("In Progress", newUser.user.uid);
      await setDoc(userRef, {
        uid: newUser.user.uid,
        username: username,
        email: newUser.user.email,
        profilePicture: "https://avatars.dicebear.com/api/identicon/"+username+".png",
      })
      console.log("User created 🔥");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };
  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values) => onSubmit(values.email, values.password, values.username)}
      validateOnMount
      initialValues={{ email: "", username: "", password: "" }}
    >
      {({
        isValid,
        values,
        errors,
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
            placeholder="Username"
            placeholderTextColor="#8B8B8B"
            onChangeText={handleChange("username")}
            onBlur={handleBlur("username")}
            style={styles.inputField}
            value={values.username}
            textContentType="username"
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

          {errors.password && (
            <Text style={{ color: "red" }}>{errors.password}</Text>
          )}

          <Pressable
            disabled={!isValid}
            onPress={handleSubmit}
            style={styles.submitButton(isValid)}
          >
            <Text style={styles.submitText(isValid)}>Sign Up</Text>
          </Pressable>
        </>
      )}
    </Formik>
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
    backgroundColor: isValid ? "#307ED8" : "#2A5E99",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    padding: 10,
    borderRadius: 3,
  }),
  submitText: (isValid) => ({
    color: isValid ? "white" : "#A8A8A8",
    fontWeight: "bold",
    fontSize: 16,
  }),
});

export default SignUpForm;
