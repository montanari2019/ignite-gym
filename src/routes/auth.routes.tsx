import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SignIn } from "../screens/SignIn";
import { SingUp } from "../screens/SingUp";




type AuthRoutesProps = {
    signIn: undefined;
    signUp: undefined;
}

export type AuthNavigatorRoutesPublicProps  = NativeStackNavigationProp<AuthRoutesProps>

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutesProps>();
export function AuthRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="signIn" component={SignIn} />
      <Screen name="signUp" component={SingUp} />
    </Navigator>
  );
}
