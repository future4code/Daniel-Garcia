import { BASE_URL } from "../constants/urls";
import axios from "axios";

export const getPosts = (setData) => {
  axios
    .get(`${BASE_URL}/posts`, {
      headers: { Authorization: localStorage.getItem("token") },
    })
    .then((res) => {
      setData(res.data);
    })
    .catch(() => {
      alert("Erro ao carregar Feed");
    });
};

export const createPost = (body, setIsLoading, clear, setData) => {
  axios
    .post(`${BASE_URL}/posts`, body, {
      headers: { Authorization: localStorage.getItem("token") },
    })
    .then((res) => {
      alert(res.data);
      setIsLoading(false);
      clear();
      axios
        .get(`${BASE_URL}/posts`, {
          headers: { Authorization: localStorage.getItem("token") },
        })
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          alert(err.response.message);
        });
    })
    .catch((err) => {
      console.log(err.response.message);
      setIsLoading(false);
    });
};

export const createPostVote = (id, body, setData) => {
  axios
    .post(`${BASE_URL}/posts/${id}/votes`, body, {
      headers: { Authorization: localStorage.getItem("token") },
    })
    .then(() => {
      axios
        .get(`${BASE_URL}/posts`, {
          headers: { Authorization: localStorage.getItem("token") },
        })
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          alert(err.response.message);
        });
    })
    .catch((err) => {
      console.log(err.response.message);
    });
};

export const changePostVote = (id, body, setData) => {
  axios
    .put(`${BASE_URL}/posts/${id}/votes`, body, {
      headers: { Authorization: localStorage.getItem("token") },
    })
    .then(() => {
      axios
        .get(`${BASE_URL}/posts`, {
          headers: { Authorization: localStorage.getItem("token") },
        })
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          alert(err.response.message);
        });
    })
    .catch((err) => {
      console.log(err.response.message);
    });
};

export const deletePostVote = (id, setData) => {
  axios
    .delete(`${BASE_URL}/posts/${id}/votes`, {
      headers: { Authorization: localStorage.getItem("token") },
    })
    .then(() => {
      axios
        .get(`${BASE_URL}/posts`, {
          headers: { Authorization: localStorage.getItem("token") },
        })
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          alert(err.response.message);
        });
    })
    .catch((err) => {
      console.log(err.response.message);
    });
};
