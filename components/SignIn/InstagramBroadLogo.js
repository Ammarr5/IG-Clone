import { Image } from "react-native";
import React from "react";

const InstagramBroadLogo = () => {
  return (
    <Image
      source={require("../../assets/instagram.png")}
      style={{
        height: 60,
        width: 200,
        resizeMode: "contain",
        marginBottom: 30,
        alignSelf: "center",
      }}
    />
  );
};

export default InstagramBroadLogo;
