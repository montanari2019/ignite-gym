import { createContext, useState } from "react";
import { UserDTO } from "../dtos/User.DTO";
import { GetSession } from "./Fetch";

export interface AuthContextDataProps {
  user: UserDTO;
  handleSingIn: (email: string, password: string) => void;
}

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

type AuthContextProviderProps = {
  children: React.ReactNode;
};
export function AuthContextComponent({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserDTO>({} as UserDTO);

  async function handleSingIn(email: string, password: string) {
    try {
      const request = await GetSession(email, password);

      setUser(request.user);
    } catch (error) {
      throw error;
    }
  }
  return (
    <AuthContext.Provider
      value={{ user, handleSingIn } as AuthContextDataProps}
    >
      {children}
    </AuthContext.Provider>
  );
}
