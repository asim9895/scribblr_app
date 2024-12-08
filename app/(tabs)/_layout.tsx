import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const TabsLayout = () => {
  return (
    <Stack
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        animation: "ios_from_right",
      }}
    >
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="profile" options={{ headerShown: false }} />
    </Stack>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
