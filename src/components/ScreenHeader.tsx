import { StyleSheet, Text, View } from "react-native";
import { THEME } from "../themes";

interface ScreenHeaderProps {
    title:string
}

export function ScreenHeader({ title }:ScreenHeaderProps) {
  return (
    <View style={styled.container}>
      <Text style={styled.containerText}>{title}</Text>
    </View>
  );
}

const styled = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 30,

    backgroundColor: THEME.COLORS.GRAY_600,
  },
  containerText: {
    color: THEME.COLORS.GRAY_100,
    fontSize: THEME.FONT_SIZE.XL,
    fontWeight: "bold",
    textAlign: "center",
  },
});
