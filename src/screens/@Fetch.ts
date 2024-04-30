import { AppError } from "../utils/App.Error";
import { URL_HOST_API } from "../utils/utils";

export async function GetGroupButtons(token:string){

    try {
    const request = await fetch(`${URL_HOST_API}/groups`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const response = await request.json();


      if(response.message === "token.invalid"){
        throw new AppError(response.message)
      }

      if(response.status === 'error'){
        throw new AppError(response.message)
      }

      return response

    } catch (error){
        console.log(error);
        throw error
    }
}
export async function GetExerciosByGroup(token:string, group:string){




  
    try {
      const request = await fetch(`${URL_HOST_API}/exercises/bygroup/${group}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
  
        const response = await request.json();
  
  
        if(response.message === "token.invalid"){
          throw new AppError(response.message)
        }
        if(response.status === 'error'){
          throw new AppError(response.message)
        }
  
        return response
  
      } catch (error){
          console.log(error);
          throw error
      }
  
   
}
export async function GetExerciosById(token:string, exerciseId:string){
  
    try {
      const request = await fetch(`${URL_HOST_API}/exercises/${exerciseId}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
  
        const response = await request.json();
  
  
        if(response.message === "token.invalid"){
          throw new AppError(response.message)
        }
        if(response.status === 'error'){
          throw new AppError(response.message)
        }
  
        return response
  
      } catch (error){
          console.log(error);
          throw error
      }
  
   
}
export async function PostExerciosRegisterById(token:string, exerciseId:string){

    try {
      const request = await fetch(`${URL_HOST_API}/history`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ exercise_id: exerciseId }),
        });
  
        const response = await request.json();
  
  
        if(response.status === 'error'){
          throw new AppError(response.message)
        }

        if(response.message === "token.invalid"){
          throw new AppError(response.message)
        }
  
        console.log(response)
        return response
  
      } catch (error){
          console.log(error);
          throw error
      }
  
   
}


export async function GetHistoryExerciosByUser(token:string, ){
  
  try {
    const request = await fetch(`${URL_HOST_API}/history`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const response = await request.json();


      if(response.status === 'error'){
        throw new AppError(response.message)
      }

      if(response.message === "token.invalid"){
        throw new AppError(response.message)
      }

      return response

    } catch (error){
        console.log(error);
        throw error
    }

 
}


export async function PatchPhotoUploadForm(token:string, dataForm:any){

  try {
    const request = await fetch(`${URL_HOST_API}/users/avatar`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
        body: JSON.stringify(dataForm),
      });

      const response = await request.json();


      if(response.status === 'error'){
        throw new AppError(response.message)
      }

      if(response.message === "token.invalid"){
        throw new AppError(response.message)
      }

      console.log(response)
      return response

    } catch (error){
        console.log(error);
        throw error
    }

 
}