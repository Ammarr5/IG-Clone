import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  arrayRemove,
  arrayUnion,
  doc,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "../../firebase";

const Post = ({
  username,
  caption,
  imageURL,
  comments,
  likes,
  userPicture,
  postID,
  uid,
}) => {
  return (
    <View style={{ marginBottom: 20 }}>
      <PostHeader userPicture={userPicture} username={username} />
      <PostImage imageURL={imageURL} />
      <PostActions postID={postID} likes={likes} uid={uid} />
      <Text
        style={{
          fontWeight: "bold",
          color: "white",
          paddingHorizontal: 10,
          marginTop: 10,
        }}
      >
        {likes.length} like{likes.length === 1 ? "" : "s"}
      </Text>
      <PostCaption username={username} caption={caption} />
    </View>
  );
};

const PostHeader = ({ userPicture, username }) => {
  return (
    <View style={styles.postHeader}>
      <View style={styles.headerLeftSide}>
        <View style={styles.profilePicContainer}>
          <Image source={{ uri: userPicture }} style={styles.profilePic} />
        </View>
        <Text style={styles.headerUsername}>{username}</Text>
      </View>
      <Image
        source={require("../../assets/ellipsis.png")}
        style={styles.ellipsis}
      />
    </View>
  );
};

const PostImage = ({ imageURL }) => {
  return (
    <View style={styles.postImageContainer}>
      <Image source={{ uri: imageURL }} style={styles.postImage} />
    </View>
  );
};

const PostActions = ({ postID, likes, uid }) => {
  const [liked, setLiked] = useState(likes.includes(auth.currentUser.uid));
  const handleLike = async () => {
    setLiked((prev) => !prev);
    const post = doc(doc(db, "users", uid), "posts", postID);
    await updateDoc(post, {
      likes: liked
        ? arrayRemove(auth.currentUser.uid)
        : arrayUnion(auth.currentUser.uid),
    });
  };
  return (
    <View style={styles.postActionsContainer}>
      <View style={styles.postActionsLeftSide}>
        <PostActionIcon
          source={liked ? require("../../assets/red-heart.png") : require("../../assets/heart.png")}
          style={[styles.postActionsIcon, styles.postActionsLeftSideIcons]}
          onPress={handleLike}
        />
        <PostActionIcon
          source={require("../../assets/comment.png")}
          style={[styles.postActionsIcon, styles.postActionsLeftSideIcons]}
        />
        <PostActionIcon
          source={require("../../assets/share.png")}
          style={[styles.postActionsIcon, styles.postActionsLeftSideIcons]}
        />
      </View>
      <PostActionIcon
        source={require("../../assets/save.png")}
        style={styles.postActionsIcon}
      />
    </View>
  );
};

const PostActionIcon = ({ source, style, onPress }) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Image
        source={source}
        style={{ width: "100%", height: "100%", resizeMode: "contain" }}
      />
    </TouchableOpacity>
  );
};

const PostCaption = ({ username, caption }) => {
  return (
    <Text style={{ color: "white", paddingHorizontal: 10, marginTop: 10 }}>
      <Text style={{ fontWeight: "bold", marginRight: 10 }}>{username}</Text>
      <Text> {caption}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  profilePicContainer: {
    width: 40,
    height: 40,
    borderRadius: 50,
    overflow: "hidden",
    marginRight: 5,
    backgroundColor: "#E9E9E9",
  },
  profilePic: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  headerUsername: {
    fontWeight: "bold",
    color: "#fff",
  },
  headerLeftSide: {
    flexDirection: "row",
    alignItems: "center",
  },
  ellipsis: {
    width: 30,
    resizeMode: "contain",
  },
  postImageContainer: {
    maxHeight: 350,
    overflow: "hidden",
  },
  postImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    backgroundColor: "orange",
  },
  postActionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    paddingHorizontal: 10,
  },
  postActionsLeftSide: {
    flexDirection: "row",
  },
  postActionsIcon: {
    width: 30,
    height: 30,
  },
  postActionsLeftSideIcons: {
    marginRight: 10,
  },
});

export default Post;
