import axios, { AxiosResponse } from "axios";

interface AuthResponse {
  username: string;
  accessToken: string;
}

export const register = async (username: string, password: string, email: string) => {
  const response: AxiosResponse<AuthResponse> = await axios({
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
  if (response.data.username) {
    localStorage.setItem("username", response.data.username)
  }

  console.log(response.data)
};

