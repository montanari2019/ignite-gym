import { Text, TextInput, TextInputProps, View } from "react-native";
import { StyleSheet } from "react-native";
import { THEME } from "../themes";
import { useState } from "react";

interface InputComponentProps extends TextInputProps {
  errorMessage?: string;
}

export function InputComponent({
  errorMessage,
  ...resto
}: InputComponentProps) {
  const [focusInput, setFocusInput] = useState(false);

  const handleFocus = () => {
    setFocusInput(true);
  };

  const handleBlur = () => {
    setFocusInput(false);
  };

  const containerStyle = [
    styled.input,
    focusInput && styled.inputFocus,
    !!errorMessage && styled.inputInvalid,
  ];

  return (
    <>

      <Text style={styled.textErrorMessage}>{errorMessage}</Text>
      <TextInput
        {...resto}
        placeholderTextColor={THEME.COLORS.GRAY_400}
        autoCapitalize="none"
        autoCorrect={false}
        onFocus={() => handleFocus()}
        onBlur={() => handleBlur()}
        style={containerStyle}
      />
    </>
  );
}

const styled = StyleSheet.create({
  input: {
    width: "100%",
    height: 56,
    borderRadius: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: "transparent",
    backgroundColor: THEME.COLORS.GRAY_700,
    color: THEME.COLORS.GRAY_200,
    fontSize: THEME.FONT_SIZE.MD,
    fontWeight: "normal",
    // marginTop: 20,
  },

  inputFocus: {
    width: "100%",
    height: 56,
    borderRadius: 8,
    padding: 8,
    backgroundColor: THEME.COLORS.GRAY_700,
    borderWidth: 1,
    borderColor: THEME.COLORS.GREEN_700,
    color: THEME.COLORS.GRAY_200,
    fontSize: THEME.FONT_SIZE.MD,
    fontWeight: "normal",
    // marginTop: 20,
  },
  inputInvalid: {
    width: "100%",
    height: 56,
    borderRadius: 8,
    padding: 8,
    backgroundColor: THEME.COLORS.GRAY_700,
    borderWidth: 1,
    borderColor: THEME.COLORS.DANGER_500,
    color: THEME.COLORS.DANGER_500,
    fontSize: THEME.FONT_SIZE.MD,
    fontWeight: "normal",
    // marginTop: 20,
  },

  textErrorMessage: {
    color: THEME.COLORS.DANGER_500,
    fontSize: THEME.FONT_SIZE.SM,
    fontWeight: "normal",
  }
});
