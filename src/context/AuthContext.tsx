import { createContext } from "react";
import { UserDTO } from "../dtos/User.DTO";

export interface AuthContextDataProps {
  user: UserDTO;
}

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);
