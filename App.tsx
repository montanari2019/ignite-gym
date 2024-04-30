import { StatusBar } from "react-native";

import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { Loading } from "./src/components/Loading";
import { Routes } from "./src/routes";
import { AuthContextComponent } from "./src/context/AuthContext";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent={true}
      />

      <AuthContextComponent>
        {fontsLoaded ? (
          <>
            <Routes />
          </>
        ) : (
          <Loading />
        )}
      </AuthContextComponent>
    </>
  );
}
