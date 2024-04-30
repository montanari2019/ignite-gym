import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { History } from "../screens/History";
import { Profile } from "../screens/Profile";
import { Exercise } from "../screens/Exercise";

import HomeSVG from "../assets/home.svg";
import HistorySVG from "../assets/history.svg";
import ProfileSVG from "../assets/profile.svg";
import { THEME } from "../themes";
import { Platform } from "react-native";
import { AuthRoutes } from "./auth.routes";

type AuthRoutesProps = {
  home: undefined;
  exercise: undefined;
  history: undefined;
  profile: undefined;
};

export type AuthNavigatorRoutesPrivadeProps =
  BottomTabNavigationProp<AuthRoutesProps>;

export function AppRoutes() {
  const iconSize = 25;
  const { Navigator, Screen } = createBottomTabNavigator<AuthRoutesProps>();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: THEME.COLORS.GREEN_500,
        tabBarInactiveTintColor: THEME.COLORS.GRAY_200,
        tabBarStyle:{
            backgroundColor: THEME.COLORS.GRAY_600,
            borderTopWidth: 0,
             height: Platform.OS === 'android' ? "auto" : 96,
             paddingBottom: 36,
             paddingTop: 25
        
        }
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSVG width={iconSize} height={iconSize} fill={color} />
          ),
        }}
      />
      <Screen
        name="history"
        component={History}
        options={{
          tabBarIcon: ({ color }) => (
            <HistorySVG width={iconSize} height={iconSize} fill={color} />
          ),
        }}
      />
      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <ProfileSVG width={iconSize} height={iconSize} fill={color} />
          ),
        }}
      />
      <Screen name="exercise" component={Exercise} options={{
        tabBarButton: () => null
      }} />
    
    </Navigator>
  );
}
