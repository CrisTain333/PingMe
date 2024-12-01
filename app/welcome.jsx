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
        <Text style={style.title}>PingMe!</Text>
        <Text style={style.punchLine}>
          Where every thoughts finds a home and every image tells a stroy
        </Text>
      </View>
    </ScreenWrapper>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    // alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: wp(10),
    margin: "10rm",
  },
  welcomeImage: {
    height: hp(40),
    width: wp(100),
    alignSelf: "center",
  },

  title: {
    fontSize: 50,
  },
});
