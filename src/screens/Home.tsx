import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { HomeHeader } from "../components/HomeHeader";
import { GroupButton } from "../components/GroupButton";
import { useState } from "react";
import { THEME } from "../themes";
import { CardExecicio } from "../components/CardExercise";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesPrivadeProps } from "../routes/app.routes";

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

const exerciciosDefault = [
  {
    id: "1",
    title: "Puxada frontal",
    subTitle: "3 séries x 12 repetições",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9gcQ7ksuOP52IGREtf6FFgxPefC6I5ltjl8XE65VjbA&s",
  },
  {
    id: "2",
    title: "Remada curvada",
    subTitle: "3 séries x 12 repetições",
    imgUrl:
      "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/05/05/1301740817-remada-curvada.jpg",
  },
  {
    id: "3",
    title: "Remada unilateral",
    subTitle: "3 séries x 12 repetições",
    imgUrl:
      "https://www.feitodeiridium.com.br/wp-content/uploads/2016/07/remada-unilateral-2.jpg",
  },
  {
    id: "4",
    title: "Levantamento terra",
    subTitle: "3 séries x 12 repetições",
    imgUrl:
      "https://cdn.fisiculturismo.com.br/monthly_2017_11/levantamento-terra.jpg.cbf57ca5cca0493e2f38cfa8b76bd59d.jpg",
  },
];

type ExercicioProps = typeof exerciciosDefault;
export function Home() {
  const [buttonPress, setButtonPress] = useState("");
  const [exercicios, setExercicios] = useState<ExercicioProps>(exerciciosDefault);

  const navigation = useNavigation<AuthNavigatorRoutesPrivadeProps>()

  function handleOpenExerciseCardDetails(){
    navigation.navigate("exercise")
  }
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader />

      <FlatList
        style={{ maxHeight: 80 }}
        data={buttonItens}
        keyExtractor={(item) => item}
        contentContainerStyle={{
          maxHeight: 70,
          gap: 5,
          padding: 25,
          paddingLeft: 25,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <GroupButton
            titelButton={item}
            isActive={buttonPress === item}
            onPress={() => setButtonPress(item)}
          />
        )}
      />

      <View style={styled.sectionPaiExecicio}>
        <View style={styled.sectionExecicio}>
          <Text style={styled.titleStyleBold}>Exercícios</Text>
          <Text style={styled.titleStyle}>4</Text>
        </View>

        <FlatList
          data={exercicios}
          keyExtractor={(item) => String(item.id + item.title)}
          contentContainerStyle={{
            gap: 5,
            paddingBottom: 20,
          }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <CardExecicio
              title={item.title}
              subTitle={item.subTitle}
              imgUrl={item.imgUrl}
              onPress={() => handleOpenExerciseCardDetails()}
            />
          )}
        />
      </View>
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
