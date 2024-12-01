import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import ScreenWrapper from "@/components/ScreenWrapper";

export default function index() {
  const router = useRouter();

  return (
    <ScreenWrapper>
      <Text>Hello world ji</Text>
      <Button
        title="Click me"
        onPress={() =>
          router.push({
            pathname: "welcome",
          })
        }
      />
    </ScreenWrapper>
  );
}
