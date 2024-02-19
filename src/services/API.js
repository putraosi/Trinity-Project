import axios from "axios";
import { getData } from "../helpers";
import { TOKEN } from "../utils";
const API_URL = `${process.env.REACT_APP_API_URL}`;

const api = axios.create({
  baseURL: API_URL,
  timeout: 20000,
  headers: {},
  // paramsSerializer: (params) => querystring.stringify(params),
});

api.interceptors.request.use(
  async (req) => {
    const token = getData(TOKEN);
    if (!token) return req;

    req.headers["Authorization"] = `Bearer ${token}`;
    return req;
  },
  (error) => {}
);

export const Api = {
  post: async ({ url, body = {}, showLog }) => {
    try {
      if (showLog) {
        console.log("API URL", url);
        console.log("API BODY", body);
      }

      const res = await api.post(url, body);

      if (showLog) console.log("API RES", res);

      return res?.data;
    } catch (error) {
      let dataError = error;
      if (showLog) console.log("API ERROR", error);

      if (error?.response?.data) dataError = error?.response?.data;

      throw dataError;
    }
  },

  get: async ({ url, params = {}, showLog }) => {
    try {
      if (showLog) {
        console.log("API URL", url);
        console.log("API PARAMS", params);
      }

      const res = await api.get(url, { params });

      if (showLog) console.log("API RES", res);

      return res?.data;
    } catch (error) {
      let dataError = error;
      if (showLog) console.log("API ERROR", error);

      if (error?.response?.data) dataError = error?.response?.data;

      throw dataError;
    }
  },

  put: async ({ url, body, showLog }) => {
    if (showLog) {
      console.log("API URL", url);
      console.log("API BODY", body);
    }

    try {
      const res = await api.put(url, body);

      if (showLog) console.log("API RES", res?.data);

      return res?.data;
    } catch (error) {
      let dataError = error;
      if (showLog) console.log("API ERROR", error);

      if (error?.response?.data) dataError = error?.response?.data;

      throw dataError;
    }
  },

  delete: async ({ url, body, showLog }) => {
    if (showLog) {
      console.log("API URL", url);
      console.log("API BODY", body);
    }

    try {
      const res = await api.delete(url, body);

      if (showLog) console.log("API RES", res?.data);

      return res?.data;
    } catch (error) {
      let dataError = error;
      if (showLog) console.log("API ERROR", error);

      if (error?.response?.data) dataError = error?.response?.data;

      throw dataError;
    }
  },
};
