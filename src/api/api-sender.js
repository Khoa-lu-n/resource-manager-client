import axios from "axios";
import { toast } from "react-toastify";
import { logOut } from "../services/auth-service";
const URL_BASE = "http://localhost:3001/api";

function handleResult(res) {
  if (res.data.success === false) {
    if (res.data.code === 22) {
      toast.error("Session expired, please login again");
      logOut();
    }
  }
  return res.data;
}

export function sendGetRequest(
  route,
  payload,
  token = localStorage.getItem("token")
) {
  const url = `${URL_BASE}${route}`;
  const headers = token ? { token } : undefined;
  return axios.get(url, { headers, data: payload }).then(handleResult);
}

export function sendPostRequest(route, payload) {
  const url = `${URL_BASE}${route}`;
  return axios.post(url, payload).then(handleResult);
}

export function sendPutRequest(route, payload) {
  const url = `${URL_BASE}${route}`;
  return axios.put(url, payload).then(handleResult);
}