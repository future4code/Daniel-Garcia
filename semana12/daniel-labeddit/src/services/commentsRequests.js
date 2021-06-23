import { BASE_URL } from "../constants/urls";
import { usePostData } from "../hooks/usePostData";
import { usePutData } from "../hooks/usePutData"
import { useDeleteData } from "../hooks/useDeleteData"

export const createComment = (id,body) => {
  const headers = {
    headers: { "Content-Type": application / json,
    "Authorization": localStorage.getItem("token")
  }
}
  const { request, error } = usePostData(
    `${BASE_URL}/posts/${id}/comments`, body, headers
  );
  return { request, error };
};

export const createCommentVote = (id,body) => {
  const headers = {
    headers: { "Content-Type": application / json,
    "Authorization": localStorage.getItem("token")
  }
}
  const { request, error } = usePostData(
    `${BASE_URL}/comments/${id}/votes`, body, headers
  );
  return { request, error };
};

export const changeCommentVote = (id,body) => {
  const headers = {
    headers: { "Content-Type": application / json,
    "Authorization": localStorage.getItem("token")
  }
}
  const { request, error } = usePutData(
    `${BASE_URL}/comments/${id}/votes`, body, headers
  );
  return { request, error };
};

export const deleteCommentVote = (id) => {
  const headers = {
    headers: { "Content-Type": application / json,
    "Authorization": localStorage.getItem("token")
  }
}
  const { request, error } = useDeleteData(
    `${BASE_URL}/comments/${id}/votes`, headers
  );
  return { request, error };
};