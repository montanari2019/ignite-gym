import { StyleSheet, Text, TextInput, TextInputProps } from "react-native";
import { THEME } from "../themes";
import { useState } from "react";


interface InputProfile extends TextInputProps{
    disabled?: boolean;
    errorMessage?:string
}

export function InputProfile({  errorMessage,disabled = false,...resto}:InputProfile) {

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
  
    const handleFocus = () => {
      setIsFocused(true);
    };
  
    const handleBlur = () => {
      setIsFocused(false);
    };
  
    const handleChangeText = (text: string) => {
      setIsFilled(text.trim().length > 0);
    };
  
    const containerStyle = [
        styled.containerDefault,
      isFocused && styled.containerActive,
      isFilled && styled.containerFilled,
      disabled && styled.containerDisabled,
    ];


  return (
    <>
     {errorMessage && <Text style={styled.textErrorMessage}>{errorMessage}</Text>}
      <TextInput
        {...resto}
        placeholderTextColor={ THEME.COLORS.GRAY_300}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={handleChangeText}
        style={containerStyle}
      />
    </>
  );
}


const styled = StyleSheet.create({
    containerDefault:{
        flex: 1,
        height: 56,
        
        borderRadius: 8,
        borderWidth: 1,
        borderColor: THEME.COLORS.GRAY_700,
        color: THEME.COLORS.GRAY_300,
        padding: 15,
        backgroundColor: THEME.COLORS.GRAY_500
    },

    containerActive:{
        flex: 1,
        height: 56,
        
        borderRadius: 8,
        borderWidth: 1,
        borderColor: THEME.COLORS.GREEN_700,
        color: THEME.COLORS.GRAY_100,
        padding: 15,
        backgroundColor: THEME.COLORS.GRAY_500
    },
    containerFilled:{
        flex: 1,
        height: 56,
        
        borderRadius: 8,
        borderWidth: 1,
        borderColor: THEME.COLORS.GRAY_700,
        color: THEME.COLORS.GRAY_100,
        padding: 15,
        backgroundColor: THEME.COLORS.GRAY_500
    },

    containerError:{
        flex: 1,
        height: 56,
       
        borderRadius: 8,
        borderWidth: 1,
        borderColor: THEME.COLORS.DANGER_500,
        color: THEME.COLORS.GRAY_100,
        padding: 15,
        backgroundColor: THEME.COLORS.GRAY_500
    },
    
    textErrorMessage: {
      color: THEME.COLORS.DANGER_500,
      fontSize: THEME.FONT_SIZE.SM,
      fontWeight: "normal",
    },
    
    containerDisabled:{
        flex: 1,
        height: 56,
       
        borderRadius: 8,
        borderWidth: 1,
        borderColor: THEME.COLORS.GRAY_700,
        color: THEME.COLORS.GRAY_300,
        padding: 15,
        opacity: 0.5,
        backgroundColor: THEME.COLORS.GRAY_600
    },
})
