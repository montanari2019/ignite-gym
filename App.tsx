
import { StatusBar, StyleSheet, Text, View } from 'react-native';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from './src/components/Loading';

export default function App() {

  const [ fontsLoaded ] = useFonts({Roboto_400Regular, Roboto_700Bold})
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#202024"}}>
      <StatusBar barStyle={"light-content"}  backgroundColor='transparent' translucent={true}/>
      {
        !fontsLoaded ?  <Text>HOla mundo</Text> :  <Loading/>
      }
     
      
    </View>
  );
}

