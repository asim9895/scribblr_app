import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Redirect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const RootPage = () => {
  //   const { authenticated }: { authenticated: boolean } = useSelector(
  //     (state: any) => state.user
  //   );
  const { welcomed }: { welcomed: boolean } = useSelector(
    (state: RootState) => state.welcome
  );
  return (
    <SafeAreaView>
      {welcomed ? <Redirect href={"/login"} /> : <Redirect href={"/welcome"} />}
    </SafeAreaView>
  );
};

export default RootPage;

const styles = StyleSheet.create({});
