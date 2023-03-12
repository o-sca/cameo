import axios, { AxiosResponse } from "axios";

interface AuthResponse {
  username: string;
  authenticated: boolean;
  user_id: string;
}

const baseUrl = "https://6af8-2001-569-70c7-4300-8095-1aac-6db8-57ad.ngrok.io";

export const register = async (username: string, password: string, email: string) => {
  const response: AxiosResponse<AuthResponse> = await axios({
    baseURL: baseUrl,
    url: '/api/v1/signup',
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    data: {
      username: username,
      password: password,
      email: email
    },
    responseType: 'json'
  });
  return response.data;
};

export const signIn = async (username: string, password: string) => {
  const response: AxiosResponse<AuthResponse> = await axios({
    baseURL: baseUrl,
    url: '/api/v1/signin',
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    data: {
      username: username,
      password: password
    },
    responseType: 'json'
  });
  return response.data;
};

export const getAuth = async () => {
  const response: AxiosResponse<{ authenticated: boolean }> = await axios({
    baseURL: baseUrl,
    url: '/api/v1/auth',
    method: 'GET',
    headers: { "Content-Type": "application/json" },
    responseType: 'json',
  })

  return response.data;
}
