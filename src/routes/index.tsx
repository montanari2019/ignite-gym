import { DefaultTheme, NavigationContainer, } from "@react-navigation/native";
import { View } from "react-native";
import { useAuth } from "../context/AuthHook";
import { THEME } from "../themes";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { Loading } from "../components/Loading";

export function Routes() {
  const theme = DefaultTheme;
  theme.colors.background = THEME.COLORS.GRAY_700;

  const { user, } = useAuth()

 
  

  return (
    <View style={{flex: 1, backgroundColor: THEME.COLORS.GRAY_700}}>
      <NavigationContainer theme={theme}>
        
        {user.token  ? <AppRoutes/>: <AuthRoutes />}
        

      </NavigationContainer>
    </View>
  );
}
