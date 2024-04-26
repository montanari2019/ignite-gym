import { ActivityIndicator } from "react-native";
import { THEME } from "../themes";




export function Loading(){
    return(
        <>
            <ActivityIndicator color={THEME.COLORS.GREEN_700}/>
        
        </>
    )
}