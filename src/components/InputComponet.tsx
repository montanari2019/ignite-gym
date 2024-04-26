import { TextInput, TextInputProps, View } from "react-native";
import { StyleSheet } from "react-native";
import { THEME } from "../themes";
import { useState } from "react";

interface InputComponentProps extends TextInputProps {

   
}

export function InputComponent({ ...resto }: InputComponentProps) {
    const [focusInput, setFocusInput] = useState(false)
  return (
    <>
      <TextInput
        {...resto}
        style={focusInput ? styled.inputFocus : styled.input}
        placeholderTextColor={THEME.COLORS.GRAY_400}
        autoCapitalize="none"
        autoCorrect={false}
        onFocus={()=> setFocusInput(true)}
        onBlur={() => setFocusInput(false)}
   
      />

    </>
  );
}



const styled = StyleSheet.create({
    input:{
        width: "100%",
        height: 56,
        borderRadius: 8,
        padding: 8,
        borderWidth: 1,
        borderColor: 'transparent',
        backgroundColor: THEME.COLORS.GRAY_700,
        color: THEME.COLORS.GRAY_200,
        fontSize: THEME.FONT_SIZE.MD,
        fontWeight: 'normal',
        marginTop: 20,
       
    },

    inputFocus:{
        width: "100%",
        height: 56,
        borderRadius: 8,
        padding: 8,
        backgroundColor: THEME.COLORS.GRAY_700,
        borderWidth: 1,
        borderColor: THEME.COLORS.GREEN_700,
        color: THEME.COLORS.GRAY_200,
        fontSize: THEME.FONT_SIZE.MD,
        fontWeight: 'normal',
        marginTop: 20,
       
    }


})