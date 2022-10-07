import axios from "axios";

export const instance = axios.create({
  withCredentials: true,
  baseURL: "http://89.108.88.2:8080/v2/",
});

export class Api {
  static request(url, data, method, withToken = true) {
    const headers = withToken
      ? {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("TOKEN"),
          },
        }
      : undefined;
    return instance.request({ method, url, data, headers });
  }

  static post(url, data, withToken) {
    return Api.request(url, data, "POST", withToken);
  }

  static get(url, withToken) {
    return Api.request(url, "GET", withToken);
  }

  static put(url, data, withToken) {
    return Api.request(url, data, "PUT", withToken);
  }

  static delete(url,  withToken) {
    return Api.request(url, "DELETE", withToken);
  }
}
