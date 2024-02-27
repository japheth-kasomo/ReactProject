import axios from 'axios';

function httpClient(baseURL) {
  const baseClient = axios.create({
    baseURL,
    timeout: 10000,
  });
  baseClient.interceptors.request.use(async request => {
    const accessToken = await localStorage.getItem('token');
    return {
      ...request,
      headers: {
        ...request.headers,
        ...(accessToken ? { Authorization: `bearer ${accessToken}` } : {}),
      },
    };
  });

  return baseClient;
}

export const client = httpClient('http://164.90.152.6');
