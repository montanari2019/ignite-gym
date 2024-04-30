import {
  Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { HomeHeader } from "../components/HomeHeader";
import { GroupButton } from "../components/GroupButton";
import { useCallback, useEffect, useState } from "react";
import { THEME } from "../themes";
import { CardExecicio } from "../components/CardExercise";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesPrivadeProps } from "../routes/app.routes";
import { AppError } from "../utils/App.Error";
import { useAuth } from "../context/AuthHook";
import { GetExerciosByGroup, GetGroupButtons } from "./@Fetch";
import { ExercisesDTO } from "../dtos/Exercises.DTO";
import { URL_HOST_THUMB } from "../utils/utils";
import { LoadingShimmer } from "../components/LoadingShimmer";

const buttonItens = [
  "Costas",
  "Bíceps",
  "Tríceps",
  "Ombro",
  "testa",
  "braco",
  "trapezio",
  "peito",
];

export function Home() {
  const [groupButtonPress, setGroupButtonPress] = useState("");
  const [groups, setGroups] = useState<string[]>([]);
  const [exercicios, setExercicios] = useState<ExercisesDTO[]>([]);
  const [loadingDataExercises, setLoadingDataExercises] = useState(false);

  const navigation = useNavigation<AuthNavigatorRoutesPrivadeProps>();

  const { user } = useAuth();

  useEffect(() => {
    LoadingGetGrupos();
  }, []);

  function handleOpenExerciseCardDetails(id: string) {
    navigation.navigate("exercise", {id});
  }

  async function LoadingGetGrupos() {
    try {
      const request = await GetGroupButtons(user.token);

      setGroups(request);
      setGroupButtonPress(request[0]);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Groups", error.message);
      } else {
        Alert.alert("Groups", "Não foi possível carregar os grupos musculares");
        console.log(error);
      }
    }
  }

  async function LoadingGetExerciciosByGroup() {
    if (groupButtonPress === "") {
      return;
    }
    try {
      setLoadingDataExercises(true);

      const request = await GetExerciosByGroup(user.token, groupButtonPress);

      setExercicios(request);
    } catch (error) {
      setLoadingDataExercises(true);
      if (error instanceof AppError) {
        Alert.alert("Exercícios", error.message);
      } else {
        Alert.alert(
          "Exercícios",
          "Não foi possível carregar os grupos musculares"
        );
        console.log(error);
      }
    } finally {
      setLoadingDataExercises(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      LoadingGetExerciciosByGroup();
    }, [groupButtonPress])
  );
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader />

      <FlatList
        style={{ maxHeight: 80 }}
        data={groups}
        keyExtractor={(item) => item}
        contentContainerStyle={{
          maxHeight: 70,
          gap: 5,
          padding: 25,
          paddingLeft: 25,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={() => {
          return (
            <Text style={styled.titleStyle}>
              Lista de grupos musculares vazia
            </Text>
          );
        }}
        renderItem={({ item }) => (
          <GroupButton
            titelButton={item}
            isActive={groupButtonPress === item}
            onPress={() => setGroupButtonPress(item)}
          />
        )}
      />

      <LoadingShimmer isLoading={loadingDataExercises}>
        <View style={styled.sectionPaiExecicio}>
          <View style={styled.sectionExecicio}>
            <Text style={styled.titleStyleBold}>Exercícios</Text>
            <Text style={styled.titleStyle}>4</Text>
          </View>

          <FlatList
            data={exercicios}
            keyExtractor={(item) => String(item.id)}
            contentContainerStyle={{
              gap: 5,
              paddingBottom: 20,
            }}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <CardExecicio
                title={item.name}
                subTitle={`${item.series} séries x ${item.repetitions} repetições`}
                imgUrl={`${URL_HOST_THUMB}/${item.thumb}`}
                onPress={() => handleOpenExerciseCardDetails(String(item.id))}
              />
            )}
            ListEmptyComponent={() => {
              return (
                <Text style={styled.titleStyle}>Lista de exercícios vazia</Text>
              );
            }}
          />
        </View>
      </LoadingShimmer>
    </View>
  );
}

const styled = StyleSheet.create({
  sectionExecicio: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionPaiExecicio: {
    // marginTop: 16,
    padding: 30,
    flex: 1,
  },

  titleStyle: {
    color: THEME.COLORS.GRAY_100,
    fontSize: THEME.FONT_SIZE.MD,
    fontWeight: "normal",
  },
  titleStyleBold: {
    color: THEME.COLORS.GRAY_100,
    fontSize: THEME.FONT_SIZE.LG,
    fontWeight: "700",
  },
});
