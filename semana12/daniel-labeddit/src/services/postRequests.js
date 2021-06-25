import { BASE_URL } from "../constants/urls";
import axios from "axios";

export const getPosts = (setData) => {

  axios.get(`${BASE_URL}/posts`, {headers: {Authorization: localStorage.getItem("token")}
})
  .then((res)=>{
    setData(res.data) 
  })
  .catch(()=>{
    alert("Erro ao carregar Feed")
  })
 
};

export const createPost = (body, setIsLoading, clear) => {

  axios.post(
    `${BASE_URL}/posts`, body, {headers: {Authorization: localStorage.getItem("token")}})
    .then((res)=>{

    })
    .catch((err)=>{

    })
};

// export const GetPostComments = (id) => {
//   const headers = {
//     Headers: `Authorization": ${localStorage.getItem("token")}`,
//   };

//   const { request, error } = useRequestData(
//     `${BASE_URL}/posts/${id}/comments`, headers
//   );
//   return { request, error };
// };

// export const CreatePostVote = (id,body) => {
//   const headers = {
//     Headers: `Authorization": ${localStorage.getItem("token")}`,
//   };

//   const { request, error } = usePostData(
//     `${BASE_URL}/posts/${id}/votes`, body, headers
//   );
//   return { request, error };
// };

// export const ChangePostVote = (id,body) => {
//   const headers = {
//     Headers: `Authorization": ${localStorage.getItem("token")}`,
//   };
//   const { request, error } = usePutData(
//     `${BASE_URL}/posts/${id}/votes`, body, headers
//   );
//   return { request, error };
// };

// export const DeletePostVote = (id) => {
//   const headers = {
//     Headers: `Authorization": ${localStorage.getItem("token")}`,
//   };
//   const { request, error } = useDeleteData(
//     `${BASE_URL}/posts/${id}/votes`, headers
//   );
//   return { request, error };
// };