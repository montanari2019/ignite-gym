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

export function Profile() {
  const [userPhoto, setUserPhoto] = useState(
    "https://github.com/montanari2019.png"
  );

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
      setUserPhoto(imgSelected.assets[0].uri);
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
            source={{
              uri: userPhoto,
            }}
          />
          <TouchableOpacity
            style={styled.containerButton}
            onPress={() => handleUserPhotoSelect()}
          >
            <Text style={styled.containerButtonText}>Alterar foto</Text>
          </TouchableOpacity>
        </View>
        <View style={styled.containerInpus}>
          <InputProfile placeholder="Nome" />
          <InputProfile disabled value="ikaro.montanari@gmail.com" />
        </View>

        <View style={styled.containerInpus}>
          <Text style={styled.containerText}>Alterar senha</Text>
          <InputProfile secureTextEntry placeholder="Senha antiga" />
          <InputProfile secureTextEntry placeholder="Nova senha" />
          <InputProfile secureTextEntry placeholder="Confirmar senha" />
          <ButtonComponent title="Atualizar" />
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
