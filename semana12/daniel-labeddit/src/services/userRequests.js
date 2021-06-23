import { BASE_URL } from "../constants/urls";
import { usePostData } from "../hooks/usePostData";

export const signUp = (body) => {
  const headers = {
    headers: { "Content-Type": application / json },
  };
  const { request, error } = usePostData(
    `${BASE_URL}/users/signup`,
    body,
    headers
  );
  return { request, error };
};

export const login = (body, headers) => {
  const headers = {
    headers: { "Content-Type": application / json },
  };
  const { request, error } = usePostData(
    `${BASE_URL}/users/login`,
    body,
    headers
  );
  return { request, error };
};
