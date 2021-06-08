import { createContext } from "react";
import { action, makeObservable, observable, computed } from "mobx";
import api from "../services/api";

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}

export interface UserLogin {
  email: string;
  password: string;
}

class UserStore {
  users: User = {
    id: 0,
    name: "string",
    email: "",
    password: "",
    created_at: new Date(),
    updated_at: new Date(),
  };

  constructor() {
    makeObservable(this, {
      users: observable,
      loginUser: action,
      logoutUser: action,
      getUser: action,
      getUsers: action,
      isLogged: computed,
    });
  }

  get isLogged() {
    return Boolean(localStorage.getItem("@CXLIFE:isLogged"));
  }

  loginUser = (req: UserLogin) => {
    api.post("/sessions", req).then(async (response: any) => {
      const data = await response.data;
      const token = data.token;
      const user = data.user;
      console.log(data);
      api.defaults.headers.common["Authorization"] = "Bearer " + token;
      localStorage.setItem("@CXLIFE:token", token);
      localStorage.setItem("@CXLIFE:user", JSON.stringify(user));
      localStorage.setItem("@CXLIFE:isLogged", "true");
    });
  };

  logoutUser = () => {
    api.defaults.headers.common["Authorization"] = undefined;
    localStorage.removeItem("@CXLIFE:token");
    localStorage.removeItem("@CXLIFE:user");
    localStorage.removeItem("@CXLIFE:isLogged");
  };

  getUser = (idUser: number) => {
    const token = localStorage.getItem("@CXLIFE:token");

    if (token) {
      api.defaults.headers.common["Authorization"] = "Bearer " + token;
    }

    api.get(`/users/${idUser}`).then(async (response: any) => {
      const users = await response.data;
      return users;
    });
  };

  getUsers = () => {
    const token = localStorage.getItem("@CXLIFE:token");

    if (token) {
      api.defaults.headers.common["Authorization"] = "Bearer " + token;
    }
    api.get(`/users/`).then(async (response: any) => {
      const users = await response.data;
      console.log(users);
      return users;
    });
  };
}

export default createContext(new UserStore());
