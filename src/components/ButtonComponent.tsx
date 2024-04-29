import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { THEME } from "../themes";

interface ButtonComponentProps extends TouchableOpacityProps {
  title: string;
  variant?: "OUTLINE" | "SOLID";

}

export function ButtonComponent({ title, variant = "SOLID", ...resto}: ButtonComponentProps) {
  return (
    <TouchableOpacity {...resto} style={variant === "SOLID" ? styled.buttonSolid : styled.buttonOutline}>
      <Text style={variant === "SOLID" ? styled.buttonSolidText : styled.buttonOutlineText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styled = StyleSheet.create({
  buttonSolid: {
    width: "100%",
    height: 56,
    borderRadius: 8,
    marginTop: 16,
    backgroundColor: THEME.COLORS.GREEN_700,
    fontSize: THEME.FONT_SIZE.MD,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonSolidText: {
    color: THEME.COLORS.GRAY_100,
    fontSize: THEME.FONT_SIZE.MD,
    fontWeight: "bold",
  },

  buttonOutline: {
    width: "100%",
    height: 56,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: THEME.COLORS.GREEN_700,
    marginTop: 16,
    backgroundColor: 'transparent',
    alignItems: "center",
    justifyContent: "center",
  },
  buttonOutlineText: {
    color: THEME.COLORS.GREEN_700,
    fontSize: THEME.FONT_SIZE.MD,
    fontWeight: "bold",
    // textAlign: 'ce'
    // marginTop: 20,
  },
});
