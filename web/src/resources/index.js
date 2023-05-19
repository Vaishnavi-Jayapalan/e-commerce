import axios from "axios";
import UserResource from "./user.resource";

export const DEFAULT_BASE_URL = "http://localhost:5000/";

export const axiosInst = ((baseURL=DEFAULT_BASE_URL) => {
    const instance = axios.create({
        baseURL,
        headers: {
          "Content-Type": "application/json"
        },
    });
  
    return instance;
})();

export default class Api {
    constructor(axiosInstance = axiosInst) {
        this.userResource = new UserResource(axiosInstance)
    }
}