import { Api } from "./API";

export const LoginAPI = {
  auth(email, password) {
    return Api.post(
      `/auth`,
      {
        email: email,
        password: password,
      },
      false
    );
  },
};

export const RegistrationAPI = {
  registartion(email, login, number, password, username) {
    return Api.post(`/registration`, {
      email: email,
      login: login,
      number: number,
      password: password,
      // username: username,
    });
  },
};

export const RecoveryPassAPI = {
    recoveryPass(email) {
      return Api.post("/editpassword", {
        email: email,
      });
    },
  };
  
  export const ResetPassAPI = {
    resetPass(resetPasswordCode, password) {
      return Api.post("/editpass", {
        resetPasswordCode: resetPasswordCode,
        password: password,
      });
    },
  };
