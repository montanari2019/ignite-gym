import {
  Alert,
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
import { AuthNavigatorRoutesPrivadeProps } from "../routes/app.routes";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useAuth } from "../context/AuthHook";
import { AppError } from "../utils/App.Error";
import { useState } from "react";
import { Loading } from "../components/Loading";

type FormsDataProps = {
  email: string;
  password: string;
};

const singInSchema = yup.object({
  email: yup
    .string()
    .email("Insira um email válido")
    .required("O email é obrigatório"),

  password: yup
    .string()
    .required("A senha é obrigatória")
    .min(3, "A senha deve ter no mínimo 3 caracteres"),
});

export function SignIn() {
  const navigator = useNavigation<AuthNavigatorRoutesPublicProps>();

  const { handleSingIn, loadingStorageData } = useAuth();
  const [isLoading, setIsLoading] = useState(loadingStorageData)

  const { control, handleSubmit, reset, formState: { errors },} = useForm<FormsDataProps>({
    resolver: yupResolver(singInSchema),
  });

  function handleNavigateSingUp() {
    navigator.navigate("signUp");
  }


  async function handleSingInComponent({ email, password }: FormsDataProps) {
    try {

      setIsLoading(true)
      await handleSingIn(email, password);
    } catch (error) {
      
      
      setIsLoading(false)
     if(error instanceof AppError){
        Alert.alert("Login", error.message)
      }else {
        Alert.alert("Login","Não foi possível fazer login")
        console.log(error);

      }
    }
  }
  //
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
            <Text style={styled.titleSectionInputStyle}>Acesse sua conta</Text>

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
                  onSubmitEditing={handleSubmit(handleSingInComponent)}
                  returnKeyType="send"
                  onChangeText={onChange}
                />
              )}
            />

        
            <ButtonComponent
              variant="SOLID"
              title="Acessar"
              isLoading={isLoading}
              onPress={handleSubmit(handleSingInComponent)}
            />

            <View>
              <Text style={styled.titleSectionFormsStyle}>
                Ainda não tem acesso?
              </Text>

              <ButtonComponent
                variant="OUTLINE"
                title="Criar conta"
                isLoading={isLoading}
                onPress={handleNavigateSingUp}
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
    paddingBottom: 150,
    paddingTop: 100,
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
