import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { globalStylesWrapper } from "@/styles/global.style";
import { Colors } from "@/theme/colors";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { welcome_user } from "@/redux/actions/welcomeAction";

const WelcomePage = () => {
  const dispatch = useDispatch();
  const { colors, theme }: { colors: Colors; theme: string } = useSelector(
    (state: RootState) => state.theme
  );

  const globalStyles = globalStylesWrapper(colors);

  return (
    <View
      style={[
        globalStyles.background,
        { justifyContent: "center", alignItems: "center" },
      ]}
    >
      <StatusBar
        backgroundColor={colors.background}
        barStyle={theme === "dark" ? "light-content" : "dark-content"}
      />
      <Text style={{ color: colors.text }}>welcome</Text>
      <TouchableOpacity
        onPress={() => dispatch(welcome_user())}
        style={{ backgroundColor: colors.button, padding: 10, margin: 10 }}
      >
        <Text style={{ color: colors.text }}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomePage;
