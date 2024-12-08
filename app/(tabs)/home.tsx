import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStylesWrapper } from "@/styles/global.style";
import { Colors } from "@/theme/colors";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
const HomePage = () => {
  const { colors, theme }: { colors: Colors; theme: string } = useSelector(
    (state: RootState) => state.theme
  );

  const globalStyles = globalStylesWrapper(colors);

  return (
    <View style={[globalStyles.background, globalStyles.row_center]}>
      <StatusBar
        backgroundColor={colors.background}
        barStyle={theme === "dark" ? "light-content" : "dark-content"}
      />
      <Text style={{ color: colors.text }}>Index</Text>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
