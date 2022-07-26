import axios, { AxiosResponse } from "axios";
import { IQAList } from "../models/QAModels";

// axios.defaults.withCredentials = true;
axios.interceptors.request.use(
  async (config) => {
    config.baseURL = `http://localhost:8000/`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(undefined, (error) => {
  if (!error.response) {
    throw error;
  }
  const { status, data, config } = error.response;
  const ExceptedError = status && status >= 400 && status < 500;
  if (!ExceptedError) {
    alert("a server error accrued. call to manager");
    console.log("error mess: ", data, config);
  }
  throw error.response;
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  del: (url: string) => axios.delete(url).then(responseBody),
};

const QA = {
  list: (limit: number = 10, page: number = 1): Promise<IQAList[]> =>
    requests.get(`/QAList?_page=${page}&limit=${limit}`),
  addQA: (form: IQAList): Promise<any> => requests.post("/QAList", form),
  addReply: (id: string, form: IQAList): Promise<any> =>
    requests.put(`/QAList/${id}`, form),
  replyPoint: (id: string, form: IQAList): Promise<any> =>
    requests.put(`/QAList/${id}`, form),
};

export default { QA };
