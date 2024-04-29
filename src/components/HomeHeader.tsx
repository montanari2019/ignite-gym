import { StyleSheet, Text, View } from "react-native";
import { THEME } from "../themes";
import { Avatar } from "./ImgUser";
import { MaterialIcons } from '@expo/vector-icons';

export function HomeHeader() {
  return (
    <View style={styled.container}>
      <Avatar
        sizeImgProps="MEDIUM"
        source={{
          uri: "https://github.com/montanari2019.png",
        }}
      />
      <View style={styled.paragraph}>
        <Text style={styled.titleStyle}>Olá, </Text>
        <Text style={styled.titleStyleBold}>Rodrigo Gonçalves </Text>
      </View>

      <MaterialIcons name="logout" size={28} color={THEME.COLORS.GRAY_100} />
    </View>
  );
}

const styled = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    // justifyContent: "space-between",
    backgroundColor: THEME.COLORS.GRAY_600,
    padding: 16,
    paddingTop: 50,
    paddingBottom: 25,
    flexDirection: 'row',
  },

  paragraph: {
    flex: 1,
    paddingLeft: 20
    
  },

  titleStyle: {
    color: THEME.COLORS.GRAY_100,
    fontSize: THEME.FONT_SIZE.MD,
    fontWeight: "normal",

    
  },
  titleStyleBold: {
    color: THEME.COLORS.GRAY_100,
    fontSize: THEME.FONT_SIZE.MD,
    fontWeight: "700",
  },

  sectionInput: {
    width: "100%",
    padding: 16,
  },

  titleSectionInputStyle: {
    color: THEME.COLORS.GRAY_100,
    fontSize: THEME.FONT_SIZE.XL,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },

  titleSectionFormsStyle: {
    color: THEME.COLORS.GRAY_100,
    fontSize: THEME.FONT_SIZE.SM,
    fontWeight: "normal",
    marginTop: 40,
    // marginBottom: 10,
    textAlign: "center",
  },
});
