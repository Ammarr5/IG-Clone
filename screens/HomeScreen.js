import { SafeAreaView, StatusBar, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Home/Header";
import Stories from "../components/Home/Stories";
import Post from "../components/Home/Post";
import NavBar from "../components/Home/NavBar";
import {
  collectionGroup,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebase";

const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState();
  useEffect(async () => {
    // console.log("#\n#\n#\n#\n#\n#\n#\n#\n#\n#\n#\n#\n")
    const q = query(
      collectionGroup(db, "posts"),
      limit(20),
      orderBy("time", "desc")
    );
    onSnapshot(q, (results) =>
      setPosts(
        results.docs.map((post) => ({ ...post.data(), postID: post.id }))
      )
    );
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView style={{ marginBottom: 30 }}>
        <Stories />
        {posts?.map((post) => (
          <Post {...post} key={post.id} />
        ))}
      </ScrollView>
      <NavBar navigation={navigation}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: "black",
  },
});

export default HomeScreen;
