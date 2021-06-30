import { BASE_URL } from "../constants/urls";
import axios from "axios";

export const createComment = (
  id,
  body,
  setIsLoading,
  clear,
  setComentarios
) => {
  axios
    .post(`${BASE_URL}/posts/${id}/comments`, body, {
      headers: { Authorization: localStorage.getItem("token") },
    })
    .then((res) => {
      alert(res.data);
      clear();
      setIsLoading(false);
      axios
        .get(`${BASE_URL}/posts/${id}/comments`, {
          headers: { Authorization: localStorage.getItem("token") },
        })
        .then((res) => {
          setComentarios(res.data);
        });
    })
    .catch((err) => {
      console.log(err);
      alert("tente novamente");
      setIsLoading(false);
    });
};

export const createCommentVote = (id, body, params, setComentarios) => {
  axios
    .post(`${BASE_URL}/comments/${id}/votes`, body, {
      headers: { Authorization: localStorage.getItem("token") },
    })
    .then(() => {
      axios
        .get(`${BASE_URL}/posts/${params}/comments`, {
          headers: { Authorization: localStorage.getItem("token") },
        })
        .then((res) => {
          setComentarios(res.data);
        });
    })
    .catch();
};

export const changeCommentVote = (id, body, params, setComentarios) => {
  axios
    .put(`${BASE_URL}/comments/${id}/votes`, body, {
      headers: { Authorization: localStorage.getItem("token") },
    })
    .then(() => {
      axios
        .get(`${BASE_URL}/posts/${params}/comments`, {
          headers: { Authorization: localStorage.getItem("token") },
        })
        .then((res) => {
          setComentarios(res.data);
        });
    })
    .catch();
};

export const deleteCommentVote = (id, params, setComentarios) => {
  axios
    .delete(`${BASE_URL}/comments/${id}/votes`, {
      headers: { Authorization: localStorage.getItem("token") },
    })
    .then(() => {
      axios
        .get(`${BASE_URL}/posts/${params}/comments`, {
          headers: { Authorization: localStorage.getItem("token") },
        })
        .then((res) => {
          setComentarios(res.data);
        });
    })
    .catch();
};
