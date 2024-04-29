import { Image, ImageProps, StyleSheet } from "react-native";
import { THEME } from "../themes";


interface AvatarProps extends ImageProps{
    sizeImgProps?:  "MEDIUM" | "LARGE";
}

export function Avatar({ sizeImgProps, ...resto }:AvatarProps){

    const sizeImg = sizeImgProps === "MEDIUM" ? 60 : 148

    return(
        <Image 
        {...resto}
        width={sizeImg}
        height={sizeImg}
        
        style={styled.container}
           
        />
    )
}

const styled = StyleSheet.create({
  
    container: {
      borderRadius: 150,
      borderWidth: 1,
      borderColor: THEME.COLORS.GRAY_300,    
    },
  
   
  });
