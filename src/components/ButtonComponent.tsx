import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { THEME } from "../themes";
import { Loading } from "./Loading";

interface ButtonComponentProps extends TouchableOpacityProps {
  title: string;
  variant?: "OUTLINE" | "SOLID";
  isLoading?: boolean;
}

export function ButtonComponent({
  title,
  isLoading,
  variant = "SOLID",
  ...resto
}: ButtonComponentProps) {
  const containerStyle = [
    styled.buttonSolid,
    variant === "OUTLINE" && styled.buttonOutline,
    isLoading && styled.buttonDisabled,
  ];
  const containerTextStyle = [
    styled.buttonSolidText,
    variant === "OUTLINE" && styled.buttonOutlineText,
    isLoading && styled.buttonDisabledText,
  ];
  return (
    <TouchableOpacity {...resto} style={containerStyle}>
      {isLoading ? (
        <Loading />
      ) : (
        <Text style={containerTextStyle}>{title}</Text>
      )}
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

  buttonDisabled: {
    width: "100%",
    height: 56,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: THEME.COLORS.GREEN_700,
    marginTop: 16,
    backgroundColor: THEME.COLORS.GREEN_700,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.4,
  },
  buttonDisabledText: {
    color: THEME.COLORS.GRAY_500,
    fontSize: THEME.FONT_SIZE.MD,
    fontWeight: "bold",
    // textAlign: 'ce'
    // marginTop: 20,
  },

  buttonOutline: {
    width: "100%",
    height: 56,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: THEME.COLORS.GREEN_700,
    marginTop: 16,
    backgroundColor: "transparent",
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
