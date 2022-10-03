import { Api, instance } from "./API";

export const UserAPI = {
  getAuthUser() {
    return instance.get(
      `/getuser`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("TOKEN"),
        },
      },
      true
    );
  },
};
