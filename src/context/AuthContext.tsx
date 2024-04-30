import { createContext } from "react";
import { UserDTO } from "../dtos/User.DTO";

export interface AuthContextDataProps {
  user: UserDTO;
}

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

type AuthContextProviderProps = {
    children: React.ReactNode;
}
export function AuthContextComponent({ children }:AuthContextProviderProps){
    return(
        <AuthContext.Provider value={{user: {}} as AuthContextDataProps}>
            {children}
        </AuthContext.Provider>
    )
}