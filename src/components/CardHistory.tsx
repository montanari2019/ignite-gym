import { StyleSheet, Text, View } from "react-native";
import { THEME } from "../themes";


interface CardHistoricoExercicioProps {
  title: string,
  subTitle: string,
  time: string
}

export function CardHistoricoExercicio({ subTitle, time, title }:CardHistoricoExercicioProps) {
  return (
    <View style={styled.container}>
      <View style={styled.sectionCard}>
        <Text style={styled.containerTextBold} numberOfLines={1}>{title}</Text>
        <Text style={styled.containerTextRegular} numberOfLines={1}>{subTitle}</Text>
      </View>

      <Text  style={styled.containerTextTime}>{time}</Text>
    </View>
  );
}



const styled = StyleSheet.create({
    container:{
        backgroundColor: THEME.COLORS.GRAY_600,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8
    },
    sectionCard:{
      flex: 1,
      gap: 5,
      

    },

    containerTextRegular:{
        fontSize: THEME.FONT_SIZE.LG,
        fontWeight: 'normal',
        color: THEME.COLORS.GRAY_300,
    },
    containerTextBold:{
  
        fontSize: THEME.FONT_SIZE.MD,
        fontWeight: 'bold',
        color: THEME.COLORS.GRAY_100,
    },

    containerTextTime:{
        fontSize: THEME.FONT_SIZE.MD,
        fontWeight: 'normal',
        color: THEME.COLORS.GRAY_300,
    },
})