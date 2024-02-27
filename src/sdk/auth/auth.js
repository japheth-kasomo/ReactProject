import axios from "axios";
import { client } from "../../sdk/client";

export const login = async (email, password) => {
  const response = await axios.post(
    "https://164.90.152.6/api/v1/auth/login/",
    {
      email,
      password,
    }
  );

  return response.data;
};

// export const setAuthPassword = async (id, password, current_password) => {
//   const response = await client.patch(`/api/v1/users/updatepassword/${id}`, {
//     password,
//     current_password,
//   });

//   return response?.data;
// };


