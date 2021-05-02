import { sendGetRequest, sendPostRequest, sendPutRequest } from "./api-sender";

export function login(payload) {
  let route = "/login";
  return sendPostRequest(route, payload);
}

export function updateSettingsNotification(payload) {
  let route = "/settings";
  return sendPutRequest(route, payload);
}

export function getSettingsNotification() {
  let route = "/settings";
  return sendGetRequest(route);
}
