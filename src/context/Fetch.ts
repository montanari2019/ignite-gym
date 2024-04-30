import { AppError } from "../utils/App.Error";
import { URL_HOST_API } from "../utils/utils";

export async function GetSession(email:string, password:string){

console.log(URL_HOST_API)
    try {
    const request = await fetch(`${URL_HOST_API}/sessions`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const response = await request.json();

      // console.log(response)

      if(response.status === 'error'){
        throw new AppError(response.message)
      }

      return response

    } catch (error){
        console.log(error);
        throw error
    }
}