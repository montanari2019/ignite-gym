import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { THEME } from "../themes";

interface ButtonComponentProps extends TouchableOpacityProps {
  title: string;
  type?: "Default" | "Active";
}

export function ButtonComponent({
  title,
  type = "Active",
  ...resto
}: ButtonComponentProps) {
  return (
    <TouchableOpacity
      {...resto}
      style={type === "Active" ? styled.buttonActive : styled.buttonDefault}
    >
      <Text
        style={
          type === "Active" ? styled.buttonActiveText : styled.buttonDefaultText
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styled = StyleSheet.create({
  buttonActive: {
    width: "100%",
    height: 56,
    borderRadius: 8,
    marginTop: 32,
    backgroundColor: THEME.COLORS.GREEN_700,
    fontSize: THEME.FONT_SIZE.MD,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonActiveText: {
    color: THEME.COLORS.GRAY_200,
    fontSize: THEME.FONT_SIZE.MD,
    fontWeight: "bold",
  },

  buttonDefault: {
    width: "100%",
    height: 56,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: THEME.COLORS.GREEN_700,
    marginTop: 32,
    backgroundColor: THEME.COLORS.GRAY_700,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonDefaultText: {
    color: THEME.COLORS.GREEN_700,
    fontSize: THEME.FONT_SIZE.MD,
    fontWeight: "bold",
    // textAlign: 'ce'
    // marginTop: 20,
  },
});
