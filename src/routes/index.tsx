import { NavigationContainer, DefaultTheme ,} from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { THEME } from "../themes";
import { View } from "react-native";
import { AppRoutes } from "./app.routes";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export function Routes() {
  const theme = DefaultTheme;
  theme.colors.background = THEME.COLORS.GRAY_700;

  const contextData = useContext(AuthContext)

  console.log(contextData)

  return (
    <View style={{flex: 1, backgroundColor: THEME.COLORS.GRAY_700}}>
      <NavigationContainer theme={theme}>
        <AuthRoutes />
        {/* <AppRoutes/> */}
      </NavigationContainer>
    </View>
  );
}
