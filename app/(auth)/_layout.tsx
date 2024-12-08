import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack
      initialRouteName="register"
      screenOptions={{
        headerShown: false,
        animation: "ios_from_right",
      }}
    >
      <Stack.Screen name="register" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});
