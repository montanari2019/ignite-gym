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
import * as yup from "yup" 
import { yupResolver } from "@hookform/resolvers/yup"

import { Controller, useForm } from "react-hook-form";

type FormsDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
};

const singUpSchema = yup.object({
  name: yup
   .string()
   .required("O nome é obrigatório")
   .min(3, "O nome deve ter no mínimo 3 caracteres"),
  email: yup
   .string()
   .email("Insira um email válido")
   .required("O email é obrigatório"),

  password: yup
   .string()
   .required("A senha é obrigatória")
   .min(6, "A senha deve ter no mínimo 6 caracteres")
   .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      "A senha deve conter letras maiúsculas, minúsculas, números e caracteres especiais"
    ),
  password_confirm: yup
   .string()
   .required("A confirmação da senha é obrigatória")
   .oneOf([yup.ref("password"),], "As senhas devem ser iguais"),
})

export function SingUp() {
  const navigator = useNavigation();

  const { control, handleSubmit, formState: { errors }, } = useForm<FormsDataProps>({
    resolver: yupResolver(singUpSchema)
  });

  function handleNavigateSingIn() {
    navigator.goBack();
  }

  function handleSingUp(data: FormsDataProps) {
    // console.log(data)
  }
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      // style={{ backgroundColor: THEME.COLORS.GRAY_700 }}
    >
      <SafeAreaView style={styled.safeAreaStyle}>
        <Image
          source={backgroundImg}
          defaultSource={backgroundImg}
          style={styled.backgroundImgStyle}
        />

        <View style={styled.container}>
          <View>
            <LogoSVG />

            <Text style={styled.titleStyle}>Treine sua mente e seu corpo</Text>
          </View>

          <View style={styled.sectionInput}>
            <Text style={styled.titleSectionInputStyle}>Crie sua conta</Text>

            <View style={styled.sectionInputDisplay}>
              <Controller
                control={control}
                name="name"
                
                render={({ field: { onChange, value } }) => (
                  <InputComponent
                    placeholder="Nome"
                    keyboardAppearance="dark"
                    keyboardType="default"
                    key={"inputnome"}
                    value={value}
                    errorMessage={errors.name?.message}
                    onChangeText={onChange}
                  />
                )}
              />

              <Controller
                control={control}
                name="email"
               
                render={({ field: { onChange, value } }) => (
                  <InputComponent
                    placeholder="Email"
                    keyboardAppearance="dark"
                    keyboardType="default"
                    key={"inputemail"}
                    value={value}
                    errorMessage={errors.email?.message}
                    onChangeText={onChange}
                  />
                )}
              />

              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value } }) => (
                  <InputComponent
                    placeholder="Senha"
                    keyboardAppearance="dark"
                    secureTextEntry
                    key={"inputSenha"}
                    value={value}
                    errorMessage={errors.password?.message}
                    onChangeText={onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name="password_confirm"
                render={({ field: { onChange, value } }) => (
                  <InputComponent
                    placeholder="Confirme sua Senha"
                    keyboardAppearance="dark"
                    secureTextEntry
                    key={"inputConfirmSenha"}
                    value={value}
                    errorMessage={errors.password_confirm?.message}
                    onSubmitEditing={handleSubmit(handleSingUp)}
                    returnKeyType="send"
                    onChangeText={onChange}
                  />
                )}
              />
            </View>

            <ButtonComponent
              variant="SOLID"
              title="Criar e acessar"
              onPress={handleSubmit(handleSingUp)}
            />

            <View style={{ marginTop: 16 * 4 }}>
              <ButtonComponent
                variant="OUTLINE"
                title="Voltar para login"
                onPress={handleNavigateSingIn}
              />
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

  sectionInputDisplay:{
    gap:5
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

  titleErroForm: {
    color: THEME.COLORS.DANGER_500,
    fontSize: THEME.FONT_SIZE.MD,
    fontWeight: "normal",
    textAlign: "center",
  },
});
