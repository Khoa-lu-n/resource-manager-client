import {
  sendGetRequest,
  sendPostRequest,
  sendPutRequestWithToken
} from "./api-sender";

export function login(payload) {
  let route = "/login";
  return sendPostRequest(route, payload);
}

export function updateSettingsNotification(payload) {
  let route = "/settings";
  return sendPutRequestWithToken(route, payload);
}

export function getSettingsNotification() {
  let route = "/settings";
  return sendGetRequest(route);
}
