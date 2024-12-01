import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import { StatusBar } from "expo-status-bar";
import { wp, hp } from "../helpers/common";
export default function welcome() {
  return (
    <ScreenWrapper bgColor={"white"}>
      <StatusBar style="dark" />

      <View style={style.container}>
        <Image
          style={style.welcomeImage}
          resizeMode="contain"
          source={require("../assets/images/welcome.png")}
        />
      </View>

      <View
        style={{
          gap: 20,
        }}
      >
        <Text>PingMe!</Text>
        <Text></Text>
      </View>
    </ScreenWrapper>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    // paddingHorizontal: "10px",
    height: hp(5),
  },
  welcomeImage: {
    height: hp(40),
    width: wp(100),
    alignSelf: "center",
  },
});
