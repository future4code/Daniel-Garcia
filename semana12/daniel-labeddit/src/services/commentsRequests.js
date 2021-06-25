import { BASE_URL } from "../constants/urls";
import axios from "axios"

export const createComment = (id,body,setIsLoading, clear, setComentarios) => {
  axios.post(
    `${BASE_URL}/posts/${id}/comments`, body, {headers: {Authorization: localStorage.getItem("token")}})
    .then((res)=>{
      alert(res.data)
      clear()
      setIsLoading(false)
      axios.get(`${BASE_URL}/posts/${id}/comments`, {headers: {Authorization: localStorage.getItem("token")}})
      .then((res)=>{setComentarios(res.data)})
    })
    .catch((err)=>{
      console.log(err)
      alert("tente novamente")
      setIsLoading(false)
      
    })
  };

// export const CreateCommentVote = (id,body) => {
//   const headers = {
//     headers: { "Content-Type": application / json,
//     "Authorization": localStorage.getItem("token")
//   }
// }
//   axios.post(
//     `${BASE_URL}/comments/${id}/votes`, body, {headers: {Authorization: localStorage.getItem("token")}}
//   )
//   .then()
//   .catch()
// };

// export const ChangeCommentVote = (id,body) => {

//   axios.put(
//     `${BASE_URL}/comments/${id}/votes`, body, {headers: {Authorization: localStorage.getItem("token")}}
//   )
//   .then()
//   .catch()
// };

// export const DeleteCommentVote = (id) => {

//   axios.delete(
//     `${BASE_URL}/comments/${id}/votes`, {headers: {Authorization: localStorage.getItem("token")}}
//   )
//   .then()
//   .catch()
// };