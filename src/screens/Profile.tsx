import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScreenHeader } from "../components/ScreenHeader";
import { Avatar } from "../components/ImgUser";
import { THEME } from "../themes";
import { InputProfile } from "../components/InputProfile";
import { ButtonComponent } from "../components/ButtonComponent";
import { useState } from "react";
import * as ImgPicker from "expo-image-picker";
import * as FileSysten from "expo-file-system";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useAuth } from "../context/AuthHook";
import { PatchPhotoUploadForm } from "./@Fetch";
import userPhotoDefault from "../assets/userPhotoDefault.png"
import { URL_HOST_API } from "../utils/utils";

type FormsDataProps = {
  name: string;
  email: string;
  password: string;
  old_password: string;
  confirm_password: string;
};

const profileSchema = yup.object({
  name: yup.string()
        .required("O nome é obrigatório"),

  email: yup.string()
        .email("Email inválido")
        .required("O email é obrigatório"),

  password: yup.string()
            .min(4, "A senha deve ter no mínimo 3 caracteres")
            .optional()
            .nullable()
            .transform((value) => !!value ? value : null),
            

  old_password: yup.string()
                .min(4, "A senha deve ter no mínimo 3 caracteres")
                .optional()
                .nullable()
                .transform((value) => !!value ? value : null),

  confirm_password: yup.string()
                    .oneOf([yup.ref("password")], "As senhas devem ser iguais")
                    .optional()
                    .nullable()
                    .transform((value) => !!value ? value : null),
});
export function Profile() {
  const [userPhoto, setUserPhoto] = useState(
    "https://github.com/montanari2019.png"
  );
  const { user } = useAuth();

  const { control, handleSubmit, formState: {errors} } = useForm<FormsDataProps>({
    defaultValues: {
      email: user.email,
      name: user.name,
      confirm_password: "",
      old_password: "",
      password: "",

    },

    resolver: yupResolver(profileSchema) as any,

  });
 

  async function handleUpdateProfile(data: FormsDataProps) {
    console.log(data);
  }
  async function handleUserPhotoSelect() {
    try {
      const imgSelected = await ImgPicker.launchImageLibraryAsync({
        mediaTypes: ImgPicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
      });

      if (imgSelected.canceled) {
        return;
      }

      if (imgSelected.assets[0].uri) {
        const file = (await FileSysten.getInfoAsync(
          imgSelected.assets[0].uri
        )) as any;

        if (file.size && file.size / 1024 / 1024 > 5) {
          return Alert.alert(
            "Essa imagem é muito grande, escolha uma de até 5MB"
          );
        }
      }
      // setUserPhoto();

      const fileExtension = imgSelected.assets[0].uri.split('.').pop();

        const photoFile = {
          name: `${user.name}.${fileExtension}`.toLowerCase(),
          uri: imgSelected.assets[0].uri,
          type: `${imgSelected.assets[0].type}/${fileExtension}`
        } as any;

        const userPhotoUploadForm = new FormData();

        userPhotoUploadForm.append('avatar', photoFile);

        console.log(userPhotoUploadForm)

      await PatchPhotoUploadForm(user.token, userPhotoUploadForm)


    } catch (err) {
      console.log(err);
    } finally {
    }
  }
  return (
    <View style={styled.containerPai}>
      <ScreenHeader title="Perfil" />
      <ScrollView>
        <View style={styled.container}>
          <Avatar
            sizeImgProps="LARGE"
            source={user.avatar ? {uri: `${URL_HOST_API}/avatar/${user.avatar}`} : userPhotoDefault}
          />
          <TouchableOpacity
            style={styled.containerButton}
            onPress={() => handleUserPhotoSelect()}
          >
            <Text style={styled.containerButtonText}>Alterar foto</Text>
          </TouchableOpacity>
        </View>
        <View style={styled.containerInpus}>
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <InputProfile
                placeholder="Nome"
                keyboardAppearance="dark"
                keyboardType="default"
                key={"inputNome"}
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
              <InputProfile
                placeholder="Email"
                keyboardAppearance="dark"
                keyboardType="default"
                key={"inputEmail"}
                value={value}
                disabled
                onChangeText={onChange}
              />
            )}
          />
        </View>

        <View style={styled.containerInpus}>
          <Text style={styled.containerText}>Alterar senha</Text>

          <Controller
            control={control}
            name="old_password"
            render={({ field: { onChange, value } }) => (
              <InputProfile
                placeholder="Senha antiga"
                keyboardAppearance="dark"
                errorMessage={errors.old_password?.message}
                keyboardType="default"
                key={"inputOldPassword"}
                secureTextEntry
                value={value}
                onChangeText={onChange}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <InputProfile
                placeholder="Nova senha"
                keyboardAppearance="dark"
                errorMessage={errors.password?.message}
                secureTextEntry
                keyboardType="default"
                key={"inputPassword"}
                value={value}
                onChangeText={onChange}
              />
            )}
          />

          <Controller
            control={control}
            name="confirm_password"
            render={({ field: { onChange, value } }) => (
              <InputProfile
                placeholder="Confirmar senha"
                keyboardAppearance="dark"
                secureTextEntry
                keyboardType="default"
                errorMessage={errors.confirm_password?.message}
                key={"inputConfirmPassword"}
                value={value}
                onChangeText={onChange}
              />
            )}
          />

          <ButtonComponent
            title="Atualizar"
            onPress={handleSubmit(handleUpdateProfile)}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styled = StyleSheet.create({
  containerPai: {
    flex: 1,
    // marginBottom: 300
  },
  container: {
    marginTop: 32,
    marginLeft: 25,
    marginRight: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  containerButton: {
    marginTop: 16,
  },
  containerButtonText: {
    color: THEME.COLORS.GREEN_500,
    fontSize: THEME.FONT_SIZE.LG,
    fontWeight: "bold",
    textAlign: "center",
  },

  containerText: {
    color: THEME.COLORS.GRAY_100,
    fontSize: THEME.FONT_SIZE.LG,
    fontWeight: "bold",
  },

  containerInpus: {
    marginTop: 42,
    marginRight: 25,
    marginLeft: 25,
    gap: 10,
  },
});
