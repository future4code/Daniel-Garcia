import { BASE_URL } from "../constants/urls";
import { useRequestData } from "../hooks/useRequestData";
import { usePostData } from "../hooks/usePostData";
import { usePutData } from "../hooks/usePutData"
import { useDeleteData } from "../hooks/useDeleteData"

export const getPosts = () => {
  const headers = {
    headers: { "Content-Type": application / json,
    "Authorization": localStorage.getItem("token")
  }
  }
  const { request, error } = useRequestData(
    `${BASE_URL}/posts`, headers
  );

  return { request, error };
};

export const getPostComments = (id) => {
  const headers = {
    headers: { "Content-Type": application / json,
    "Authorization": localStorage.getItem("token")
  }
}
  const { request, error } = useRequestData(
    `${BASE_URL}/posts/${id}/comments`, headers
  );
  return { request, error };
};

export const createPost = (body) => {
  const headers = {
    headers: { "Content-Type": application / json,
    "Authorization": localStorage.getItem("token")
  }
}
  const { request, error } = usePostData(
    `${BASE_URL}/posts`, body, headers
  );
  return { request, error };
};

export const createPostVote = (id,body) => {
  const headers = {
    headers: { "Content-Type": application / json,
    "Authorization": localStorage.getItem("token")
  }
}
  const { request, error } = usePostData(
    `${BASE_URL}/posts/${id}/votes`, body, headers
  );
  return { request, error };
};

export const changePostVote = (id,body) => {
  const headers = {
    headers: { "Content-Type": application / json,
    "Authorization": localStorage.getItem("token")
  }
}
  const { request, error } = usePutData(
    `${BASE_URL}/posts/${id}/votes`, body, headers
  );
  return { request, error };
};

export const deletePostVote = (id) => {
  const headers = {
    headers: { "Content-Type": application / json,
    "Authorization": localStorage.getItem("token")
  }
}
  const { request, error } = useDeleteData(
    `${BASE_URL}/posts/${id}/votes`, headers
  );
  return { request, error };
};