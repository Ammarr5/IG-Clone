import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { ScrollView } from "react-native";

const Stories = () => {
  return (
    <View style={styles.storiesContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {[...Array(20)].map((_, index) => (
          <Story key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

const Story = () => {
  return (
    <View>
      <View style={styles.storyContainer}>
        <View style={styles.storyImageContainer}>
          <Image
            source={{uri: "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_08/3235961/200219-pop-smoke-al-1356.jpg"}}
            style={styles.storyImage}
          />
        </View>
      </View>
        <Text style={{color: "white", textAlign: "center"}}>username</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  storyContainer: {
    padding: 3,
    backgroundColor: "orange",
    marginRight: 10,
    borderRadius: 50,
    alignItems: "center",
    // justifyContent: "center"
  },
  storyImageContainer: {
    borderRadius: 50,
    overflow: "hidden",
    borderColor: "black",
    borderWidth: 3,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    width: 70,
  },
  storyImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  storiesContainer: {
    paddingBottom: 15,
    paddingHorizontal: 5,
    marginBottom: 10,
    borderBottomColor: "#222",
    borderBottomWidth: 1,
  },
});

export default Stories;
