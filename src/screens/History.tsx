import { SectionList, StyleSheet, Text, View } from "react-native";
import { ScreenHeader } from "../components/ScreenHeader";
import { CardHistoricoExercicio } from "../components/CardHistory";
import { THEME } from "../themes";
import { useState } from "react";

const exercicioHistoryDefault = [
  {
    title: "26.08.22",
    data: [
      {
        title: "Costas",
        subTitle: "Puxada frontal",
        time: "08:56",
      },

      {
        title: "Costas",
        subTitle: "Remada unilateral",
        time: "08:32",
      },
    ],
  },

  {
    title: "25.08.22",
    data: [
      {
        title: "Costas",
        subTitle: "Puxada frontal",
        time: "11:24",
      },

      {
        title: "Costas",
        subTitle: "Remada unilateral",
        time: "23:32",
      },
    ],
  },
];

type ExercicioHistoryProps = typeof exercicioHistoryDefault;
export function History() {
  const [exercicioHistory, setExercicioHistory] = useState<ExercicioHistoryProps>(exercicioHistoryDefault);
  return (
    <View>
      <ScreenHeader title="Histórico de Exercícios" />
      <View style={styled.containerCardHistorico}>
        <SectionList
          sections={exercicioHistory}
          keyExtractor={(item) => item.time + item.subTitle}
          contentContainerStyle={{
            gap: 10,
          }}
          ListEmptyComponent={() =>{
            return (
     
                <Text style={styled.titleStyleBold}>
                  Você ainda não fez nenhum exercício
                </Text>
             
            )
          }}
          renderItem={({ item }) => (
            <CardHistoricoExercicio
              title={item.title}
              subTitle={item.subTitle}
              time={item.time}
            />
          )}
          renderSectionHeader={({section})=>(
            <Text style={styled.titleSection}>{section.title}</Text>
          )}
        />
      </View>
    </View>
  );
}

const styled = StyleSheet.create({
  containerCardHistorico: {
    margin: 20,
  },

  titleSection:{
    color: THEME.COLORS.GRAY_200,
    fontSize: THEME.FONT_SIZE.MD,
    fontWeight: 'bold',
    padding: 10,
    paddingTop: 20,
    paddingBottom: 10,
  },

  titleStyleBold:{
    color: THEME.COLORS.GRAY_300,
    fontSize: THEME.FONT_SIZE.MD,
    textAlign: 'center',
  }
  // sectionCard:{
  //   flex: 1,
  //   gap: 5,

  // },

  // containerTextRegular:{
  //     fontSize: THEME.FONT_SIZE.LG,
  //     fontWeight: 'normal',
  //     color: THEME.COLORS.GRAY_300,
  // },
  // containerTextBold:{
  //     fontSize: THEME.FONT_SIZE.MD,
  //     fontWeight: 'bold',
  //     color: THEME.COLORS.GRAY_100,
  // },

  // containerTextTime:{
  //     fontSize: THEME.FONT_SIZE.MD,
  //     fontWeight: 'normal',
  //     color: THEME.COLORS.GRAY_300,
  // },
});
