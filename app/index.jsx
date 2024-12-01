import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export default function index() {
  const router = useRouter();

  return (
    <View>
      <Text>Hello world ji</Text>
      <Button
        title="Click me"
        onPress={() =>
          router.push({
            pathname: "welcome",
          })
        }
      />
    </View>
  );
}
