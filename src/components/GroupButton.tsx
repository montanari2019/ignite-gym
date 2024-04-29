import { Pressable, PressableProps, StyleSheet, Text } from "react-native";
import { THEME } from "../themes";
import { useState } from "react";

interface GroupButtonProps extends PressableProps {
  titelButton: string;
  isActive? : boolean;
}

export function GroupButton({ titelButton, isActive = false, ...resto }: GroupButtonProps) {
  const [focusInput, setFocusInput] = useState(false);
  return (
    <Pressable
      {...resto}
      style={isActive ? styled.containerActiv : styled.containerInactiv}
      
      
    >
      <Text
        style={
          focusInput ? styled.containerTextActiv : styled.containerTextInactiv
        }
      >
        {titelButton}
      </Text>
    </Pressable>
  );
}

const styled = StyleSheet.create({
  containerInactiv: {
    overflow: 'hidden',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: THEME.COLORS.GRAY_700,
    backgroundColor: THEME.COLORS.GRAY_600,
    height: 46,
    width: 80,
    //   height: 56,
    alignItems: "center",
    justifyContent: "center",
  },
  containerActiv: {
      overflow: 'hidden',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: THEME.COLORS.GREEN_500,
    backgroundColor: THEME.COLORS.GRAY_600,
    height: 46,
    width: 80,
    //   height: 56,
    alignItems: "center",
    justifyContent: "center",
  },

  containerTextInactiv: {

    textTransform: "uppercase",
    color: THEME.COLORS.GRAY_100,
    fontSize: THEME.FONT_SIZE.SM,
    fontWeight: "bold",
  },
  containerTextActiv: {
    textTransform: "uppercase",
    color: THEME.COLORS.GREEN_500,
    fontSize: THEME.FONT_SIZE.SM,
    fontWeight: "bold",
  },
});
