import {
  View,
  TextInput,
  Text,
  Image,
  StyleSheet,
  Switch,
  Button,
} from "react-native";
import React, { useState } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { auth, db } from "../../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";

const schema = yup.object().shape({
  postImage: yup.string().url().required("You need to add an image"),
  postCaption: yup.string().max(2000, "Exceeded number of characters"),
});

const blankImage = "https://i.stack.imgur.com/ZPkFL.png";

const Form = ({ navigation }) => {
  const [previewImage, setPreviewImage] = useState(blankImage);
  const handlePost = async (imageURL, caption) => {
    try {
      const user = (
        await getDocs(
          query(
            collection(db, "users"),
            where("uid", "==", auth.currentUser.uid)
          )
        )
      ).docs[0].data();
      const post = {
        imageURL: imageURL,
        caption: caption,
        uid: user.uid,
        userPicture: user.profilePicture,
        username: user.username,
        time: serverTimestamp(),
        likes: [],
        comments: [],
      };
      const postsRef = collection(doc(db, "users", user.uid), "posts");
      await setDoc(doc(postsRef), post);
      navigation.goBack();
      console.log("Image uploaded 🔥");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Formik
      onSubmit={(values) => handlePost(values.postImage, values.postCaption)}
      initialValues={{ postImage: "", postCaption: "" }}
      validateOnMount
      validationSchema={schema}
    >
      {({
        values,
        handleSubmit,
        handleBlur,
        handleChange,
        errors,
        isValid,
      }) => (
        <>
          <View style={styles.previewContainer}>
            <Image
              source={{ uri: previewImage || blankImage }}
              style={{
                width: 100,
                height: 100,
                resizeMode: "cover",
                marginRight: 10,
              }}
            />
            <TextInput
              multiline
              placeholder="Write a caption"
              placeholderTextColor="#bbb"
              onChangeText={handleChange("postCaption")}
              onBlur={handleBlur("postCaption")}
              value={values.postCaption}
              style={styles.inputField}
            />
          </View>
          <TextInput
            placeholder="Paste image url"
            placeholderTextColor="#bbb"
            onChangeText={handleChange("postImage")}
            onBlur={handleBlur("postImage")}
            onChange={(e) =>
              !errors.postImage ? setPreviewImage(e.nativeEvent.text) : ""
            }
            value={values.postImage}
            style={[styles.inputField, { padding: 10 }]}
          />
          <View
            style={{
              borderBottomColor: "#6D6D6D",
              borderBottomWidth: 1,
              borderTopColor: "#6D6D6D",
              borderTopWidth: 1,
              paddingHorizontal: 10,
              paddingVertical: 15,
            }}
          >
            <ShareOtion name="Facebook" />
            <ShareOtion name="Twitter" />
            <ShareOtion name="Tumblr" />
          </View>
          {errors && (
            <Text
              style={{
                color: "red",
                paddingHorizontal: 10,
                marginTop: 10,
                marginBottom: 20,
              }}
            >
              {errors.postCaption || errors.postImage}
            </Text>
          )}
          <View style={{ marginHorizontal: 100 }}>
            <Button onPress={handleSubmit} title="Share" disabled={!isValid} />
          </View>
        </>
      )}
    </Formik>
  );
};

const ShareOtion = ({ name }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <View style={styles.shareOptionContainer}>
      <Text
        style={{ textTransform: "capitalize", color: "white", fontSize: 16 }}
      >
        {name}
      </Text>
      <Switch
        trackColor={{ false: "gray", true: "#00acee" }}
        thumbColor="white"
        value={isEnabled}
        onValueChange={() => setIsEnabled((prev) => !prev)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  previewContainer: {
    flexDirection: "row",
    borderBottomColor: "#6D6D6D",
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  inputField: {
    color: "white",
  },
  shareOptionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Form;
