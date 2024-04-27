import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { THEME } from "../themes";

import backgroundImg from "../assets/background.png";
import LogoSVG from "../assets/logo.svg";
import { InputComponent } from "../components/InputComponet";
import { ButtonComponent } from "../components/ButtonComponent";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesPublicProps } from "../routes/auth.routes";

export function SingUp() {

  const navigator = useNavigation()


  function handleNavigateSingIn(){
    navigator.goBack()
  }
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      // style={{ backgroundColor: THEME.COLORS.GRAY_700 }}
    >
      <SafeAreaView style={styled.safeAreaStyle}>
      <Image source={backgroundImg} defaultSource={backgroundImg} style={styled.backgroundImgStyle} />

        <View style={styled.container}>
          <View>
            <LogoSVG />

            <Text style={styled.titleStyle}>Treine sua mente e seu corpo</Text>
          </View>

          <View style={styled.sectionInput}>
            <Text style={styled.titleSectionInputStyle}>Crie sua conta</Text>

            <InputComponent
              placeholder="Nome"
              keyboardAppearance="dark"
              keyboardType="default"
              key={"inputnome"}
            />
            <InputComponent
              placeholder="Email"
              keyboardAppearance="dark"
              keyboardType="default"
              key={"inputemail"}
            />
            <InputComponent
              placeholder="Senha"
              keyboardAppearance="dark"
              secureTextEntry
              key={"inputSenha"}
            />
            <InputComponent
              placeholder="Confirme sua Senha"
              keyboardAppearance="dark"
              secureTextEntry
              key={"inputConfirmSenha"}
            />

            <ButtonComponent variant="SOLID" title="Criar e acessar" />

            <View style={{marginTop: (16*4)}} >
              {/* <Text style={styled.titleSectionFormsStyle}>
                Ainda não tem acesso?
              </Text> */}

              <ButtonComponent variant="OUTLINE" title="Voltar para login" onPress={handleNavigateSingIn} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styled = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    width: "100%",
    // paddingBottom: 150,
    paddingTop: 50,
    // justifyContent: "space-around",
    alignItems: "center",
    // backgroundColor: THEME.COLORS.GRAY_700,
  },
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },

  backgroundImgStyle: {
    resizeMode: "contain",
    position: "absolute",
  },

  titleStyle: {
    color: THEME.COLORS.GRAY_100,
    fontSize: THEME.FONT_SIZE.SM,
    fontWeight: "normal",
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
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
