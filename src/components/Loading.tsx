import { ActivityIndicator } from "react-native";
import { THEME } from "../themes";


interface LoadingProps {
    color?: string;
}

export function Loading({color = THEME.COLORS.GREEN_700}: LoadingProps) {
    return(
        <>
            <ActivityIndicator color={color}/>
        
        </>
    )
}