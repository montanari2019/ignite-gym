import {
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
import { useNavigation } from "@react-navigation/native";

import SeriesLogo from "../assets/series.svg";
import RepeticoesLogo from "../assets/repetitions.svg";
import { ButtonComponent } from "../components/ButtonComponent";

export function Exercise() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }
  return (
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
          <Text style={styled.title}>Puxada frontal</Text>
        </View>

        <View style={styled.sectionHeaderRigth}>
          <BodyIcon />
          <Text style={styled.titleParagraph}>Costas</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styled.imgContainer}>
          <Image
            style={styled.imgStyle}
            source={{
              uri: "https://www.feitodeiridium.com.br/wp-content/uploads/2016/07/remada-unilateral-2.jpg",
            }}
          />
        </View>

        <View style={styled.sectionFooter}>
          <View style={styled.sectionDescricaoDisplay}>
            <View style={styled.sectionDescricao}>
              <SeriesLogo />
              <Text style={styled.desctiptionText}>3 séries</Text>
            </View>
            <View style={styled.sectionDescricao}>
              <RepeticoesLogo />
              <Text style={styled.desctiptionText}>12 repetições</Text>
            </View>
          </View>

          <ButtonComponent title="Marcar como realizado" />
        </View>
      </ScrollView>
    </View>
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
    marginTop: 8,
    color: THEME.COLORS.GRAY_100,
  },

  titleParagraph: {
    fontSize: THEME.FONT_SIZE.MD,
    fontWeight: "normal",
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
