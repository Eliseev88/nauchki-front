import { instance } from "./API";

export const UserAPI = {
  getAuthUser() {
    return instance.get(
      `/user`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("TOKEN"),
        },
      },
      true
    );
  },
};
