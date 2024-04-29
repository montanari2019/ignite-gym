import { Text, View } from "react-native";
import { ScreenHeader } from "../components/ScreenHeader";

export function History(){
    return (
        <View>
            <ScreenHeader title="Histórico de Exercícios"/>
            <Text >History</Text>
        </View>
    )
}