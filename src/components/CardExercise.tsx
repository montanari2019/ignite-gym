import { Image, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { THEME } from "../themes";


interface CardExecicioProps extends TouchableOpacityProps{
    title:string,
    subTitle:string,
    imgUrl:string
}

export function CardExecicio({ imgUrl,subTitle, title , ...resto }:CardExecicioProps) {
  return (
    <TouchableOpacity style={styled.container} {...resto}>
      <Image
        style={styled.img}
       
        source={{
          uri: imgUrl,
        }}
      />

      <View style={styled.sectionDescricao}>
        <Text style={styled.title}>{title}</Text>
        <Text style={styled.subTitle} numberOfLines={2}>{subTitle}</Text>
      </View>

      <MaterialIcons
        name="chevron-right"
        size={30}
        color={THEME.COLORS.GRAY_100}
      />
    </TouchableOpacity>
  );
}

const styled = StyleSheet.create({
    container:{ 
        padding: 10,
        backgroundColor:THEME.COLORS.GRAY_400,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent:'space-between',
        borderRadius: 8,
        marginTop: 16,
    },
    img:{
        objectFit: 'cover',
        width: 67,
        height: 67,
        borderRadius: 5
    },

    sectionDescricao:{
        flex: 1,
        marginLeft: 16,
    },

    title:{
        color: THEME.COLORS.GRAY_100,
        fontSize: THEME.FONT_SIZE.LG,
        fontWeight: 'bold',
        // marginBottom: 8
    },
    subTitle:{
        color: THEME.COLORS.GRAY_200,
        fontSize: THEME.FONT_SIZE.MD,
        fontWeight: 'normal',
    }
});
