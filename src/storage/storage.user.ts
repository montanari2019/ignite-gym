import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserDTO } from "../dtos/User.DTO";
import { STORAGE_CONF } from "./storage.config.enum";




export async function StorageUserSave(user: UserDTO){
    await AsyncStorage.setItem(STORAGE_CONF.USER_STORAGE, JSON.stringify(user))
}


export async function StorageUserGet() {
        const storage = await AsyncStorage.getItem(STORAGE_CONF.USER_STORAGE)

        const user: UserDTO =  storage ? JSON.parse(storage) : {}

        return user
}


export async function SingOutUser() {
    await AsyncStorage.removeItem(STORAGE_CONF.USER_STORAGE)
}