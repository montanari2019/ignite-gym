import { ActivityIndicator, View } from "react-native";
import { THEME } from "../themes";

interface LoadingShimmerProps {
  children: React.ReactNode;
  isLoading: boolean;
}

export function LoadingShimmer({ children, isLoading }: LoadingShimmerProps) {
    
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      {isLoading ? (
        <ActivityIndicator size="large" color={THEME.COLORS.GREEN_500} />
      ) : (
         children 
      )}
    </View>
  );
}
