import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { THEME } from "../themes";
import { Avatar } from "./ImgUser";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesPrivadeProps } from "../routes/app.routes";
import { useAuth } from "../context/AuthHook";
import userPhotoDefault from "../assets/userPhotoDefault.png"
import { URL_HOST_API } from "../utils/utils";
export function HomeHeader() {

  const navigation = useNavigation<AuthNavigatorRoutesPrivadeProps>()

  const  { user, handleSingOut } = useAuth()


 
  return (
    <View style={styled.container}>
      <Avatar
        sizeImgProps="MEDIUM"
        source={user.avatar ? {uri: `${URL_HOST_API}/avatar/${user.avatar}`} : userPhotoDefault}
      />
      <View style={styled.paragraph}>
        <Text style={styled.titleStyle}>Olá, </Text>
        <Text style={styled.titleStyleBold}>{user.name}</Text>
      </View>

      <TouchableOpacity>
        <MaterialIcons name="logout" size={28} color={THEME.COLORS.GRAY_100} onPress={handleSingOut} />
      </TouchableOpacity>
    </View>
  );
}

const styled = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    backgroundColor: THEME.COLORS.GRAY_600,
    padding: 16,
    paddingTop: 50,
    paddingBottom: 25,
    flexDirection: "row",
  },

  paragraph: {
    flex: 1,
    paddingLeft: 20,
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
