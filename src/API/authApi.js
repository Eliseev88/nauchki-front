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
  registartion(email, password, username) {
    return Api.post(`/registration`, {
      email,
      username,
      password,
    });
  },
};

export const RecoveryPassAPI = {
    recoveryPass(email) {
      return Api.post("/editpassword", {
        email,
      });
    },
  };
  
  export const ResetPassAPI = {
    resetPass(resetPasswordCode, password) {
      return Api.post("/editpass", {
        resetPasswordCode,
        password,
      });
    },
  };
