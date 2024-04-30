import { createContext, useEffect, useState } from "react";
import { UserDTO } from "../dtos/User.DTO";
import { GetSession } from "./Fetch";
import { StorageUserSave, StorageUserGet, SingOutUser } from "../storage/storage.user";

export interface AuthContextDataProps {
  user: UserDTO;
  loadingStorageData: boolean;
  handleSingIn: (email: string, password: string) => void;
  handleSingOut: () => void;
}

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

type AuthContextProviderProps = {
  children: React.ReactNode;
};
export function AuthContextComponent({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserDTO>({} as UserDTO);
  const [loadingStorageData, setLoadingStorageData] = useState(true);

  useEffect(() => {
    loadUserData();

  }, []);

  async function handleSingIn(email: string, password: string) {
    try {
      const request = await GetSession(email, password);

      const user:UserDTO = {
        ...request.user,
        token: request.token,
        refresh_token: request.refresh_token
      }

      if(request.user && request.token){
        setUser(user);
        StorageUserSave(user);
      }
     
    } catch (error) {
      throw error;
    }
  }

  async function handleSingOut() {
    try {
      setUser({} as UserDTO)
      await SingOutUser()

    } catch (error) {
      throw error;
    }
    
  }

  async function loadUserData() {
    try {
      const storageData = await StorageUserGet();
      if (storageData) {
        setUser(storageData);
        setLoadingStorageData(false)
      }
    }catch (error) {
      throw error;
    }
    finally{
      setLoadingStorageData(false)
    }
   
  }
  return (
    <AuthContext.Provider
      value={{ user, handleSingIn, loadingStorageData, handleSingOut } as AuthContextDataProps}
    >
      {children}
    </AuthContext.Provider>
  );
}
