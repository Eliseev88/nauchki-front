import { Api } from "./API";

export const LoginAPI = {
  auth(email, password) {
    return Api.post(
      `/v2/auth`,
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
    return Api.post(`/v2/registration`, {
      email,
      username,
      password,
    });
  },
};

export const RecoveryPassAPI = {
    recoveryPass(email) {
      return Api.post("/v2/editpassword", {
        email,
      });
    },
  };
  
  export const ResetPassAPI = {
    resetPass(resetPasswordCode, password) {
      return Api.post("/v2/editpass", {
        resetPasswordCode,
        password,
      });
    },
  };
