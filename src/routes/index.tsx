import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { THEME } from "../themes";
import { View } from "react-native";
import { AppRoutes } from "./app.routes";

export function Routes() {
  const theme = DefaultTheme;
  theme.colors.background = THEME.COLORS.GRAY_700;

  return (
    <View style={{flex: 1, backgroundColor: THEME.COLORS.GRAY_700}}>
      <NavigationContainer theme={theme}>
        {/* <AuthRoutes /> */}
        <AppRoutes/>
      </NavigationContainer>
    </View>
  );
}
