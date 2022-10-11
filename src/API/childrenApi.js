import { instance } from "./API";

export const ChildrenAPI = {
  getUserChildren() {
    return instance.get(
      `/v2/children`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("TOKEN"),
        },
      },
      true
    );
  },

  addChildren(data) {
    return instance.post(`/v2/children/`, data,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("TOKEN"),
        },
      },
    );
  },

  deleteChild(childId) {
    return instance.delete(
      '/v2/children/' + childId,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("TOKEN"),
        },
      },
    )
  },
};
