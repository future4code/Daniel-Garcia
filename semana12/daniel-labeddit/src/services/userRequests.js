import { BASE_URL } from "../constants/urls";
import axios from "axios"
import { goToFeed } from "../routes/coordinator";
export const signUp = (body, setIsLoading, clear, history, setRightButtonText) => {
  setIsLoading(true)
  const headers = {
    Headers: `Content-Type: application/json`,
  };

  axios.post(`${BASE_URL}/users/signup`, body, headers)
  .then((res)=>{
    localStorage.setItem("token", res.data.token)
    clear()
    goToFeed(history)
    setIsLoading(false)
    setRightButtonText("Logout")
  })
  .catch((err)=>{
    console.log(err.response.data.message)
    let msg = `${err.response.data.message}`
    if(err.response.data.errors[0]){
      msg = msg + "\n email: "+ err.response.data.errors[0].email
    }
    if(err.response.data.errors[1]){
      msg = msg + "\n senha: "+ err.response.data.errors[1].password
    }
    alert(msg)
    setIsLoading(false)

  })
};

export function login(body, setLoading, clear, history, setRightButtonText){
  setLoading(true)
  const headers = {
    Headers: `Content-Type: application/json`,
  };
  axios.post(`${BASE_URL}/users/login`, body, headers)
  .then((res)=>{
    localStorage.setItem("token", res.data.token)
    clear()
    goToFeed(history)
    setLoading(false)
    setRightButtonText("Logout")
  })
  .catch(()=>{
    alert("Nome de usuário ou senha incorretos")
    setLoading(false)

  })
};
