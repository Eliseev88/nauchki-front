import { instance } from "./API";
import axios from "axios";

export const UserAPI = {
  getAuthUser() {
    return instance.get(
      `/v2/user`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("TOKEN"),
        },
      },
      true
    );
  },
  postAddImg(data) {
    return axios({
      method: "post",
      url: "http://89.108.88.2:8080/addimg",
      data,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("TOKEN"),
        "Content-Type": `multipart/form-data; boundary=${data._boundary}`, 
      },
    });
  },
  putChangeUserData(data) {
    return instance.put(
      '/v2/user',
     data,
     {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("TOKEN"),
      },
    },
    );
  }
};
