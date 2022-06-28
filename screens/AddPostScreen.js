import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/AddPost/Header";
import Form from "../components/AddPost/Form";

const AddPostScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation}/>
			<View style={styles.formContainer}>
				<Form navigation={navigation}/>
			</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
	formContainer: {
		flex: 1,
		backgroundColor: "#474747"
	}
});

export default AddPostScreen;
