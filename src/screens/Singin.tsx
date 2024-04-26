import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { THEME } from "../themes";

import backgroundImg from "../assets/background.png";
import LogoSVG from "../assets/logo.svg";
import { InputComponent } from "../components/InputComponet";
import { ButtonComponent } from "../components/ButtonComponent";

export function SigngIn() {
  return (
    <SafeAreaView style={styled.safeAreaStyle}>
      <Image source={backgroundImg} style={styled.backgroundImgStyle} />

      <View style={styled.container}>
        <View>
          <LogoSVG />

          <Text style={styled.titleStyle}>Treine sua mente e seu corpo</Text>
        </View>

        <View style={styled.sectionInput}>
          <Text style={styled.titleSectionInputStyle}>Acesse sua conta</Text>

          <InputComponent
            placeholder="Digite seu email"
            keyboardAppearance="dark"
            keyboardType="email-address"
          />
          <InputComponent
            placeholder="Senha"
            keyboardAppearance="dark"
            secureTextEntry
          />

          <ButtonComponent type="Active" title="Acessar" />

          <View>
            <Text style={styled.titleSectionFormsStyle}>
              Ainda não tem acesso?
            </Text>

            <ButtonComponent type="Default" title="Criar conta" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styled = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    width: "100%",
    // justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: THEME.COLORS.GRAY_700,
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
    marginBottom: 20,
    textAlign: "center",
  },
});
