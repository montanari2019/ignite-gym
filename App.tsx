import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Loading } from "./src/components/Loading";
import { THEME } from "./src/themes";
import { SigngIn } from "./src/screens/Singin";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent={true}
      />
      {fontsLoaded ? (
        <>
          <SigngIn />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
