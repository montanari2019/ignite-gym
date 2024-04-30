import { Alert, SectionList, StyleSheet, Text, View } from "react-native";
import { ScreenHeader } from "../components/ScreenHeader";
import { CardHistoricoExercicio } from "../components/CardHistory";
import { THEME } from "../themes";
import { useCallback, useState } from "react";
import { useAuth } from "../context/AuthHook";
import { GetHistoryExerciosByUser } from "./@Fetch";
import { AppError } from "../utils/App.Error";
import { useFocusEffect } from "@react-navigation/native";
import { HistoryDTO } from "../dtos/History,DTO";


export function History() {
  const [exercicioHistory, setExercicioHistory] = useState<HistoryDTO[]>([]);
  const [loadingDataExercises, setLoadingDataExercises] = useState(false);
  const { user, handleSingOut } = useAuth();

  
  async function LoadingGetHistoryByUser() {
    try {
      setLoadingDataExercises(true);

      const request = await GetHistoryExerciosByUser(user.token,);
      setExercicioHistory(request);


    } catch (error) {
      setLoadingDataExercises(true);
      if (error instanceof AppError) {
        Alert.alert("Histórico", error.message);
      } else {
        Alert.alert("Histórico", "Não foi possível carregar o exercísio");
        console.log(error);
      }
    } finally {
      setLoadingDataExercises(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      LoadingGetHistoryByUser();
    }, [])
  );
  return (
    <View style={{flex: 1}}>
      <ScreenHeader title="Histórico de Exercícios" />
      <View style={styled.containerCardHistorico}>
        <SectionList
        
          sections={exercicioHistory}
          keyExtractor={(item) => String(item.id)}
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
              title={item.group}
              subTitle={item.name}
              time={item.hour}
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
    // flex: 1,
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
