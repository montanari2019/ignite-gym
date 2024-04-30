import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { THEME } from "../themes";
import { MaterialIcons } from "@expo/vector-icons";
import BodyIcon from "../assets/body.svg";
import { useNavigation, useRoute } from "@react-navigation/native";

import SeriesLogo from "../assets/series.svg";
import RepeticoesLogo from "../assets/repetitions.svg";
import { ButtonComponent } from "../components/ButtonComponent";
import { useEffect, useState } from "react";
import { GetExerciosById, PostExerciosRegisterById } from "./@Fetch";
import { useAuth } from "../context/AuthHook";
import { ExercisesDTO } from "../dtos/Exercises.DTO";
import { AppError } from "../utils/App.Error";
import { URL_HOST_DEMO, URL_HOST_THUMB } from "../utils/utils";
import { LoadingShimmer } from "../components/LoadingShimmer";
import { AuthNavigatorRoutesPrivadeProps } from "../routes/app.routes";

type RoutesParamsProps = {
  id: string;
};

export function Exercise() {
  const navigation = useNavigation<AuthNavigatorRoutesPrivadeProps>();
  const route = useRoute();
  const [loadingDataExercises, setLoadingDataExercises] = useState(false);
  const [loadingRegisterExercises, setLoadingRegisterExercises] = useState(false);
  const [exercisesDetails, setExercisesDetails] = useState<ExercisesDTO>({} as ExercisesDTO);

  const { id } = route.params as RoutesParamsProps;

  const { user, handleSingOut } = useAuth();

  function handleGoBack() {
    navigation.goBack();
  }
  function handleHistory() {
    navigation.navigate("history");
  }

  async function LoadingGetExerciciosByGroup() {
    try {
      setLoadingDataExercises(true);

      const request = await GetExerciosById(user.token, id);

      setExercisesDetails(request);
    } catch (error) {
      setLoadingDataExercises(true);
      if (error instanceof AppError) {
        Alert.alert("Exercícios", error.message);
      } else {
        Alert.alert("Exercícios", "Não foi possível carregar o exercísio");
        console.log(error);
      }
    } finally {
      setLoadingDataExercises(false);
    }
  }
  async function RegiterExerciciosByGroup() {
    try {
      setLoadingRegisterExercises(true);

      const request = await PostExerciosRegisterById(user.token, id);

      await Alert.alert("Exercício", request.message,  [
        {
          text: 'Ok',
          onPress: () => {
            handleHistory()
          }
        }
      ]);
      
      
    } catch (error) {
      setLoadingRegisterExercises(true);
      if (error instanceof AppError) {
        if (error.message === "token.invalid") {
          Alert.alert("Exercício", "Token expirado, você voltará para login");
          return handleSingOut();
        }
        Alert.alert("Exercício", error.message);
      } else {
        Alert.alert("Exercício", "Não foi possível registrar o exercísio");
        console.log(error);
      }
    } finally {
      setLoadingRegisterExercises(false);
    }
  }

  useEffect(() => {
    LoadingGetExerciciosByGroup();
  }, [id]);
  return (
    <LoadingShimmer isLoading={loadingDataExercises}>
      <View style={styled.container}>
        <View style={styled.header}>
          <View style={styled.sectionHeaderLeft}>
            <TouchableOpacity onPress={handleGoBack}>
              <MaterialIcons
                name="arrow-back"
                size={24}
                color={THEME.COLORS.GREEN_500}
              />
            </TouchableOpacity>
            <Text style={styled.title}>{exercisesDetails.name}</Text>
          </View>

          <View style={styled.sectionHeaderRigth}>
            <BodyIcon />
            <Text style={styled.titleParagraph}>{exercisesDetails.group}</Text>
          </View>
        </View>
        <ScrollView>
          <View style={styled.imgContainer}>
            <Image
              style={styled.imgStyle}
              source={{
                uri: `${URL_HOST_DEMO}/${exercisesDetails.demo}`,
              }}
            />
          </View>

          <View style={styled.sectionFooter}>
            <View style={styled.sectionDescricaoDisplay}>
              <View style={styled.sectionDescricao}>
                <SeriesLogo />
                <Text style={styled.desctiptionText}>
                  {exercisesDetails.series} séries
                </Text>
              </View>
              <View style={styled.sectionDescricao}>
                <RepeticoesLogo />
                <Text style={styled.desctiptionText}>
                  {exercisesDetails.repetitions} repetições
                </Text>
              </View>
            </View>

            <ButtonComponent
              title="Marcar como realizado"
              onPress={RegiterExerciciosByGroup}
              isLoading={loadingRegisterExercises}
            />
          </View>
        </ScrollView>
      </View>
    </LoadingShimmer>
  );
}

const styled = StyleSheet.create({
  container: {
    flex: 1,

    // backgroundColor: THEME.COLORS.GRAY_200,
    // justifyContent: "center",
    // alignItems: "center"
  },
  header: {
    padding: 26,
    paddingTop: 60,
    paddingBottom: 25,
    backgroundColor: THEME.COLORS.GRAY_600,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  sectionHeaderLeft: {
    gap: 16,
  },
  sectionHeaderRigth: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  title: {
    fontSize: THEME.FONT_SIZE.LG,
    fontWeight: "bold",
    textTransform: "capitalize",
    marginTop: 8,
    color: THEME.COLORS.GRAY_100,
  },

  titleParagraph: {
    fontSize: THEME.FONT_SIZE.MD,
    fontWeight: "normal",
    textTransform: "capitalize",
    // marginTop: 8,
    color: THEME.COLORS.GRAY_300,
  },

  imgContainer: {
    // flex: 1,
    alignItems: "center",
    marginTop: 20,
    padding: 26,
    // justifyContent: "center",
  },

  imgStyle: {
    width: "100%",
    height: 364,
    resizeMode: "cover",
    borderRadius: 10,
  },

  sectionFooter: {
    backgroundColor: THEME.COLORS.GRAY_600,
    padding: 26,
    marginHorizontal: 26,
    borderRadius: 10,
    gap: 16,
  },

  sectionDescricao: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  sectionDescricaoDisplay: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  desctiptionText: {
    color: THEME.COLORS.GRAY_200,
    fontSize: THEME.FONT_SIZE.MD,
    fontWeight: "normal",
  },
});
